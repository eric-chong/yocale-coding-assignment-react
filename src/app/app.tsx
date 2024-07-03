import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "src/queryClient";
import Tickets from "src/routes/Tickets";
import Ticket from "src/routes/Ticket";
import "./app.css";

export type AppProps = {};

const App = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="tickets" element={<Tickets />} />
            <Route path="tickets/:ticketId" element={<Ticket />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
