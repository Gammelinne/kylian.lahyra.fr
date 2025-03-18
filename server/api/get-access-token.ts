export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const clientId = config.spotifyClientId;
    const clientSecret = config.spotifyClientSecret;

    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("client_id", clientId);
    body.append("client_secret", clientSecret);

    try {
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
        return data.access_token ;
    } catch (error: any) {
        return { error: error.message };
    }
});
