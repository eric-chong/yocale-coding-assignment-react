import AppConfig from "src/AppConfig";

export default async function getTickets() {
  const response = await fetch(`${AppConfig.apiUrl}/tickets`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
