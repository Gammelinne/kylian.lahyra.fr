// server/api/github.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const headers = {
    Authorization: `bearer ${config.githubToken}`,
  };
  const body = {
    query: `query {
      user(login: "Gammelinne") {
        name
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`,
  };

  const response = await $fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });

  return response;
});
