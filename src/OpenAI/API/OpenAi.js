import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

function sanitizeText(text) {
  // Replace or remove unwanted characters
  return text.replace(/[^a-zA-Z0-9 .,?!]/g, ""); // Example: only keep letters, numbers, and basic punctuation
}

let timeoutId;

// Define your generationConfig, safetySettings, and model here

// Debounced run function implementation
const run = async (input) => {
  clearTimeout(timeoutId);

  return new Promise((resolve) => {
    timeoutId = setTimeout(async () => {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chatSession.sendMessage(input);
      const responseText = result.response.text();

      // Sanitize the response text
      const sanitizedResponse = sanitizeText(responseText);
      console.log("Text Genrated Successfylly by OpenAI");
      resolve(sanitizedResponse);
    }, 300); // Adjust debounce delay as needed (e.g., 300ms)
  });
};

// Export the run function
export { run };
