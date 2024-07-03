import AppConfig from "src/AppConfig";

export default async function getTicket(ticketId: number) {
  const response = await fetch(`${AppConfig.apiUrl}/tickets/${ticketId}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
