import { QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import updateTicket from "src/api/tickets/updateTicket";
import { Status } from "src/enums";
import queryClient from "src/queryClient";
import TicketDetails from "./TicketDetails";

jest.mock("src/api/tickets/updateTicket");

const ticket = {
  id: 1,
  number: "6K0PLKSP",
  userId: 2,
  status: Status.Assigned,
};
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

function renderComponent() {
  return render(
    <QueryClientProvider client={queryClient}>
      <TicketDetails ticket={ticket} users={users} />
    </QueryClientProvider>
  );
}
describe("Ticket details", () => {
  it("should render details", () => {
    renderComponent();
    expect(screen.getByText("6K0PLKSP")).toBeVisible();
    expect(screen.getByText("Albert Einstein")).toBeVisible();
    expect(screen.getByText("Assigned")).toBeVisible();
  });

  it("should call update ticket api when select status", async () => {
    renderComponent();

    const statusSelect = await screen.findByTestId("status-select");
    statusSelect.click();

    const completedOption = await screen.findByRole("option", {
      name: "Completed",
    });
    expect(completedOption).toBeVisible();

    completedOption.click();
    expect(updateTicket).toHaveBeenCalledWith(ticket.id, {
      status: Status.Completed,
    });
  });
});
