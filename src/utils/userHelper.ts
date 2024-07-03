import { User } from "src/types";

export function getUserName(users: User[], userId: number | undefined): string {
  const user = users.find((user) => user.id === userId);
  return user ? `${user.firstName} ${user.lastName}` : "Unknown";
}
