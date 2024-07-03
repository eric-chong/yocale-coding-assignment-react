import AppConfig from "src/AppConfig";

export default async function updateTicket(ticketId: number, payload: any) {
  const response = await fetch(`${AppConfig.apiUrl}/tickets/${ticketId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
