export async function getData(path) {
  const resp = await fetch(path);
  if (!resp.ok) {
    throw new Error(`Failed to load data from ${path}`);
  }
  return resp.json();
}
