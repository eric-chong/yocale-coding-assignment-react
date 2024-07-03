import AppConfig from "src/AppConfig";

export default async function getUsers() {
  const response = await fetch(`${AppConfig.apiUrl}/users`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
