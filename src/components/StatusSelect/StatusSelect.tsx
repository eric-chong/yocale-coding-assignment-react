import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getStatusName } from "src/utils/statusHelper";
import { Status } from "src/enums";

interface Props {
  status: Status;
  onChange: (value: string) => void;
}

export default function StatusSelect({ status, onChange }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <Select
      size="small"
      value={status}
      onChange={handleChange}
      aria-label="status select"
      data-testid="status-select"
    >
      <MenuItem value={Status.Assigned}>
        {getStatusName(Status.Assigned)}
      </MenuItem>
      <MenuItem value={Status.Completed}>
        {getStatusName(Status.Completed)}
      </MenuItem>
      <MenuItem value={Status.Unassigned}>
        {getStatusName(Status.Unassigned)}
      </MenuItem>
    </Select>
  );
}
