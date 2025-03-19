export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const clientId = config.spotifyClientId;
  const clientSecret = config.spotifyClientSecret;
  if (!clientId || !clientSecret) {
    return { error: "Missing Spotify client ID or client secret" };
  }

  console.log(clientId, clientSecret);
  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("client_id", clientId);
  body.append("client_secret", clientSecret);

  try {
    console.log("Fetching access token from Spotify");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
});
