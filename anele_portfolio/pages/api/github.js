export default async function handler(req, res) {
    try {
       const response = await fetch(
      "https://api.github.com/users/Aceman-dev/repos?per_page=100&sort=updated",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

        if (!response.ok) {
            return res.status(response.status).json({ error: "GITHUB API FAILED", });
        }
        const data = await response.json();

        const filtered = data.filter((repo) => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 9);

        res.status(200).json(filtered);
    }
    catch (error) { res.status(500).json({ error: "server error" }); }
}
