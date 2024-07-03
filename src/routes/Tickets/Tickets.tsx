import { useTickets } from "src/hooks/queries/tickets/useTickets";

export default function Tickets() {
  const { data: tickets } = useTickets();

  return (
    <>
      <h1>Tickets page</h1>
      <pre>{JSON.stringify(tickets)}</pre>
    </>
  );
}
