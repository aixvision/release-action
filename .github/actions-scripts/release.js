import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const result = await octokit.request("GET /repos/{owner}/{repo}/releases", {
  owner,
  repo,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    accept: "application/vnd.github+json",
  },
});

console.log(result);
