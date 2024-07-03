import { Status } from "src/enums";

export default interface Ticket {
  id: number;
  userId?: number;
  number: string;
  status: Status;
}
