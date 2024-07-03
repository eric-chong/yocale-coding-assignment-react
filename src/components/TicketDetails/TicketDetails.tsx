import { List, ListItem, ListItemText } from "@mui/material";
import StatusSelect from "../StatusSelect";
import { Ticket, User } from "src/types";
import { getUserName } from "src/utils/userHelper";
import useTicketMutation from "src/hooks/queries/tickets/useTicketMutation";

interface Props {
  ticket: Ticket;
  users: User[];
}

export default function TicketDetails({ ticket, users }: Props) {
  const mutation = useTicketMutation(ticket.id);

  const handleStatusChange = (value: string) => {
    mutation.mutate({ ...ticket, status: value });
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 660,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ListItem>
        <ListItemText primary="Ticket Number" secondary={ticket.number} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="User"
          secondary={getUserName(users, ticket.userId)}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Status"
          secondary={
            <StatusSelect
              status={ticket.status}
              onChange={handleStatusChange}
            />
          }
        />
      </ListItem>
    </List>
  );
}
