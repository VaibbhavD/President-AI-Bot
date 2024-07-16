export async function run(input) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-0125",
        messages: [{ role: "user", content: input }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-proj-ONn005DpMpGjNLxdg2ihT3BlbkFJlBjzU6tdDasNDWMenvYv",
        },
      }
    );
    if (
      response.data &&
      response.data.choices &&
      response.data.choices.length
    ) {
      return response.data.choices[0].message.content;
    }
  } catch (error) {
    console.log("Erroe:", error);
  }
}
