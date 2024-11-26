import dotenv from 'dotenv';
import {GoogleGenerativeAI} from "@google/generative-ai";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export default async function generateDescriptionWithGemini(imageBuffer) {
    const prompt = [
        "Gere uma descrição em português do brasil para a seguinte imagem, em apenas uma linha",
        "Gere apenas uma opção de uma descrição concisa para acessibilidade para a seguinte imagem em português do Brasil, em apenas uma linha.",
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

        const cleanDescription = fullDescription.replace(/\n/g, "");
        const cleanAltText = fullAltText.replace(/\n/g, "");

        return {
            description: cleanDescription || "",
            alt: cleanAltText || "",
        };
    } catch (error) {
        console.error("Erro ao obter alt-text:", error.message, error);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}