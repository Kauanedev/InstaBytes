import dotenv from 'dotenv';
import {GoogleGenerativeAI} from "@google/generative-ai";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export default async function gerarDescricaoComGemini(imageBuffer) {
    const prompt = "Gere uma descrição em português do brasil para a seguinte imagem";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image]);

        const descricaoCompleta = res.response.text();
        const descricaoEscolhida = selecionarDescricao(descricaoCompleta, 1);

        return descricaoEscolhida || "Alt-text não disponível.";
    } catch (erro) {
        console.error("Erro ao obter alt-text:", erro.message, erro);
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}

function selecionarDescricao(descricaoCompleta, numeroOpcao) {
    const regex = new RegExp(`\\*\\*Opção ${numeroOpcao}.*?\\*\\*\\n\\n>(.*?)\\n`, 's');
    const match = descricaoCompleta.match(regex);

    if (match && match[1]) {
        return match[1].trim();
    }
    return null;
}
