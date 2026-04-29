import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { amount = "10" } = request.query;

  try {
    const apiResponse = await fetch(
      `https://the-trivia-api.com/api/questions?amount=${amount}`
    );

    if (!apiResponse.ok) {
      return response.status(apiResponse.status).json({
        error: "Failed to fetch from external API",
      });
    }

    const data = await apiResponse.json();
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    response.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    return response.status(200).json(data);
  } catch (error) {
    console.error("Error fetching from trivia API:", error);
    return response.status(500).json({
      error: "Internal server error",
    });
  }
}
