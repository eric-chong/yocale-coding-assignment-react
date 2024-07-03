import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tickets from "src/routes/Tickets";
import Ticket from "src/routes/Ticket";
import "./app.css";

export type AppProps = {};

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="tickets" element={<Tickets />} />
          <Route path="tickets/:ticketId" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
