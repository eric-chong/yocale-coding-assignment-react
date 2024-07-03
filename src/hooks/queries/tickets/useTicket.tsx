import { UseQueryResult, useQuery } from "@tanstack/react-query";
import getTicket from "src/api/tickets/getTicket";
import { Ticket } from "src/types";

export function useTicket(ticketId: number): UseQueryResult<Ticket> {
  return useQuery({
    queryKey: ["tickets", ticketId],
    queryFn: async () => {
      if (!ticketId) return;
      return getTicket(ticketId);
    },
  });
}
