export default async function getCategories() {
  const result = await fetch ("http://localhost:3005/category");
  return result.json();
}
