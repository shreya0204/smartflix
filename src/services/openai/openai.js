import OpenAI from 'openai';
import { GPT3_API_KEY } from '../../utils/constants/configConstants';

const openai = new OpenAI({
    apiKey: GPT3_API_KEY,
    dangerouslyAllowBrowser: true
});


export default openai;