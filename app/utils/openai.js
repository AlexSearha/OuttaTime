import { OpenAI } from "openai"

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

async function generatePrompts(prompt) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "Write a pop cuture reference, like film, serie, very famous personality" },
            {
                role: "user",
                content: prompt,
            },
        ],
    })
    return response.choices[0].text.trim()
}

export default generatePrompts
