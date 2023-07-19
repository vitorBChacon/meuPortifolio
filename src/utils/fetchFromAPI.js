async function fetchFromGitHubApi(username, acessToken) {
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = {
    Authorization: `Bearer ${acessToken}`,
  };

  try {
    const response = await fetch(url, { headers, });
    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    const data = response.json()
    return data;
  } catch(err) {
    console.error(err)
    throw err
  }
}