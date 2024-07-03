import { UseQueryResult, useQuery } from "@tanstack/react-query";
import getUsers from "src/api/users/getUsers";
import { User } from "src/types";

export function useUsers(): UseQueryResult<User[]> {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
}
