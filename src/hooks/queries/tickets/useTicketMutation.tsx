import { useMutation } from "@tanstack/react-query";
import updateTicket from "src/api/tickets/updateTicket";
import queryClient from "src/queryClient";

export default function useTicketMutation(ticketId: number) {
  const queryKey = ["tickets", ticketId];
  return useMutation({
    mutationFn: async (payload: any) => {
      return updateTicket(ticketId, payload);
    },
    onMutate: async (newTicket) => {
      await queryClient.cancelQueries({ queryKey });
      const previousTicket = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, () => newTicket);
      return { previousTicket };
    },
    onError: (err, newTicket, context) => {
      queryClient.setQueryData(queryKey, context?.previousTicket);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
