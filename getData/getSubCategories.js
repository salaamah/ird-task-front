export default async function getSubCategories() {
  const result = await fetch ("http://localhost:3005/sub-category");
  return result.json();
}
