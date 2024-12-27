import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from "@langchain/openai";

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const llm = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY, // Ensure this is set
      temperature: 0.7,
    });

    const response = await llm.invoke("What is the weather forecast");
    console.log('response????',response);

    return 'Hello World!';
  }
}
