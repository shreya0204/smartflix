import OpenAI from 'openai';

export const initializeOpenAI = (apiKey) => {
    return new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
    });
};

export default initializeOpenAI(null);