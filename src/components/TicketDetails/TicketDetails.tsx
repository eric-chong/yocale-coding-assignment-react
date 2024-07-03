import { List, ListItem, ListItemText } from "@mui/material";
import { Ticket, User } from "src/types";
import { getUserName } from "src/utils/userHelper";
import { getStatusName } from "src/utils/statusHelper";

interface Props {
  ticket: Ticket;
  users: User[];
}

export default function TicketDetails({ ticket, users }: Props) {
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
          secondary={<div>{getStatusName(ticket.status)}</div>}
        />
      </ListItem>
    </List>
  );
}
