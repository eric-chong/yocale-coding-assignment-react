import { Status } from "src/enums";

export function getStatusName(status: Status) {
  const statusNamesMap = {
    [Status.Assigned]: "Assigned",
    [Status.Completed]: "Completed",
    [Status.Unassigned]: "Unassigned",
  };
  return statusNamesMap[status];
}
