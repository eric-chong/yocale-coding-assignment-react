import { NavLink } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Ticket, User } from "src/types";
import { getUserName } from "src/utils/userHelper";
import { getStatusName } from "src/utils/statusHelper";

interface Props {
  tickets: Ticket[];
  users: User[];
}

export default function TicketTable({ tickets, users }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Ticket number</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.number}>
              <TableCell component="th" scope="row">
                {ticket.number}
              </TableCell>
              <TableCell>{getUserName(users, ticket.userId)}</TableCell>
              <TableCell>{getStatusName(ticket.status)}</TableCell>
              <TableCell>
                <NavLink to={`/tickets/${ticket.id}`}>Edit</NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
