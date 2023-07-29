export default async function fetchFromGitHubApi(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    const data = response.json()
    return data;
  } catch(err) {
    console.error(err)
    throw err
  }
}
