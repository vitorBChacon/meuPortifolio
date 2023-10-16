export default async function fetchFromGitHubApi() {
  const url = 'https://api.github.com/users/vitorBChacon/repos';

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
