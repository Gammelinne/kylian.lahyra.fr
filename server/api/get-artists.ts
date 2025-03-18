export default defineEventHandler(async (event) => {
    const spotifyArtiste = "12Chz98pHFMPJEknJQMWvI,6FugQjLquBF4JzATRN70bR,4EePV5BljRSXJnYww4d5Qa,45yEuthJ9yq1rNXAOpBnqM,167abweXl3demO9x0VMMeJ";

    const accessToken = await $fetch("/api/get-access-token");
    const response = await fetch("https://api.spotify.com/v1/artists?ids=" + spotifyArtiste, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return await response.json();
});
