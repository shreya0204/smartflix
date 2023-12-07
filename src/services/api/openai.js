import { initializeOpenAI } from "../openai/openai";
import { GPT_QUERY, GPT_QUERY_2 } from "../../utils/constants/configConstants";

export const fetchUserQueryMovies = async ({ userQuery, useGPTKey }) => {

    const openai = initializeOpenAI(useGPTKey);

    try {
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: GPT_QUERY + userQuery + GPT_QUERY_2 }],
            model: 'gpt-3.5-turbo',
        });
        const gptRecommendedMoviesArray = gptResults?.choices[0]?.message?.content.split(',');

        if (!gptRecommendedMoviesArray) {
            return [];
        }

        return gptRecommendedMoviesArray;
    } catch (error) {
        return error;
    }
}