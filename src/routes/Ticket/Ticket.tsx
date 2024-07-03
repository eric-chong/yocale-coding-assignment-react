import { useMemo } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import TicketDetails from "src/components/TicketDetails";
import { useTicket } from "src/hooks/queries/tickets/useTicket";
import { useUsers } from "src/hooks/queries/users/useUsers";

export default function Ticket() {
  const { ticketId } = useParams();

  const { data: ticket, isLoading } = useTicket(Number(ticketId));
  const { data: users = [] } = useUsers();

  const noTicketMessage = useMemo(() => {
    return isLoading ? "Ticket is loading" : "Ticket not found";
  }, [isLoading]);

  return (
    <>
      <Typography variant="h4" component="h1">
        Ticket detail
      </Typography>

      {ticket ? (
        <TicketDetails ticket={ticket} users={users} />
      ) : (
        <div>{noTicketMessage}</div>
      )}
    </>
  );
}
