import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Status } from "src/enums";
import TicketTable, { Props } from "./TicketTable";

const tickets = [
  { id: 1, number: "6K0PLKSP", userId: 2, status: Status.Assigned },
  { id: 2, number: "WW8T7SKJ", userId: 3, status: Status.Completed },
];
const users = [
  {
    id: 2,
    firstName: "Albert",
    lastName: "Einstein",
    address: "Born in the German Empire, Einstein moved to Switzerland in 1895",
    dob: "1997-07-23T17:22:43.152Z",
    image: "mockImageUrl1",
  },
  {
    id: 3,
    firstName: "Leonardo",
    lastName: "da Vinci",
    address: "Republic of Florence",
    dob: "1957-08-01T07:27:06.718Z",
    image: "mockImageUrl1",
  },
];

const defaultProps: Props = { tickets, users };
function renderComponent(props = {}) {
  return render(
    <BrowserRouter>
      <TicketTable {...defaultProps} {...props} />
    </BrowserRouter>
  );
}

describe("Ticket table", () => {
  it("should display tickets information", () => {
    renderComponent();
    const rows = screen.getAllByRole("row");

    // table header
    expect(within(rows[0]).getByText("Ticket number")).toBeVisible();
    expect(within(rows[0]).getByText("User")).toBeVisible();
    expect(within(rows[0]).getByText("Status")).toBeVisible();

    // first row
    expect(within(rows[1]).getByText("6K0PLKSP")).toBeVisible();
    expect(within(rows[1]).getByText("Albert Einstein")).toBeVisible();
    expect(within(rows[1]).getByText("Assigned")).toBeVisible();

    // second row
    expect(within(rows[2]).getByText("WW8T7SKJ")).toBeVisible();
    expect(within(rows[2]).getByText("Leonardo da Vinci")).toBeVisible();
    expect(within(rows[2]).getByText("Completed")).toBeVisible();
  });

  it("should show Unknown when userId is not found", () => {
    renderComponent({
      tickets: [
        { id: 3, number: "859Y6MUP", userId: 0, status: Status.Unassigned },
      ],
    });
    const rows = screen.getAllByRole("row");

    // row with unknown user
    expect(within(rows[1]).getByText("859Y6MUP")).toBeVisible();
    expect(within(rows[1]).getByText("Unknown")).toBeVisible();
    expect(within(rows[1]).getByText("Unassigned")).toBeVisible();
  });
});
