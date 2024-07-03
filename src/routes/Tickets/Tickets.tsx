import { Typography } from "@mui/material";
import TicketTable from "src/components/TicketTable";
import { useTickets } from "src/hooks/queries/tickets/useTickets";
import { useUsers } from "src/hooks/queries/users/useUsers";

export default function Tickets() {
  const { data: tickets = [] } = useTickets();
  const { data: users = [] } = useUsers();

  return (
    <>
      <Typography variant="h4" component="h1">
        Tickets
      </Typography>
      <TicketTable tickets={tickets} users={users} />
    </>
  );
}
