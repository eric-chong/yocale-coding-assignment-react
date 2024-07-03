import AppConfig from "src/AppConfig";

export default async function updateTicket(ticketId: number, payload: any) {
  console.log("payload", payload);
  const response = await fetch(`${AppConfig.apiUrl}/tickets/${ticketId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
