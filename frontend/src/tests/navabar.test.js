import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
test("Finding Login and Register on navbar", async () => {
  render(
    <AuthContextProvider>
      <Router>
        <Navbar />
      </Router>
    </AuthContextProvider>
  );

  const Dashboard = screen.getByText("Login");
  const ShiftPlanning = screen.getByText("Register");

  expect(Dashboard).toBeInTheDocument();
  expect(ShiftPlanning).toBeInTheDocument();
});
