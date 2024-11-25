import dotenv from 'dotenv';
import {GoogleGenerativeAI} from "@google/generative-ai";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export default async function generateDescriptionWithGemini(imageBuffer) {
    const prompt = [
        "Gere uma descrição em português do brasil para a seguinte imagem",
        "Gere apenas uma opção de uma descrição concisa para acessibilidade para a seguinte imagem em português do Brasil.",
    ];

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const fullDescriptionResponse = await model.generateContent([prompt[0], image]);
        const fullAltTextResponse = await model.generateContent([prompt[1], image]);

        const fullDescription = fullDescriptionResponse.response.text();
        const fullAltText = fullAltTextResponse.response.text();

        const selectedDescription = selectDescription(fullDescription, 1);
        const selectedAltText = extractConciseAltText(fullAltText);

        return {
            description: selectedDescription || "Alt-text não disponível.",
            alt: selectedAltText || "Alt-text não disponível.",
        };
    } catch (error) {
        console.error("Erro ao obter alt-text:", error.message, error);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}

function selectDescription(fullDescription, optionNumber) {
    const regex = new RegExp(`\\*\\*Opção ${optionNumber}.*?\\*\\*\\n\\n>(.*?)\\n`, 's');
    const match = fullDescription.match(regex);

    if (match && match[1]) {
        return match[1].trim();
    }
    return null;
}

function extractConciseAltText(fullAltText) {
    const regex = /"([^\"]+)"/;

    const match = fullAltText.match(regex);

    if (match && match[1]) {
        return match[1].trim();
    }

    return null;
}
