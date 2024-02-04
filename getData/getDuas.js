export default async function getDuas() {
  const result = await fetch ("http://localhost:3005/dua");
  return result.json();
}
