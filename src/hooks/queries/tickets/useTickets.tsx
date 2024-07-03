import { UseQueryResult, useQuery } from "@tanstack/react-query";
import getTickets from "src/api/tickets/getTickets";
import Ticket from "src/types/ticket";

export function useTickets(): UseQueryResult<Ticket[]> {
  return useQuery({ queryKey: ["tickets"], queryFn: getTickets });
}
