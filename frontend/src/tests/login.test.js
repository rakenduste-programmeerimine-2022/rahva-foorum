import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";
import { AuthContextProvider } from "../context/AuthContext";
test("Login form values", async () => {
  render(
    <AuthContextProvider>
      <Router>
        <Login />
      </Router>
    </AuthContextProvider>
  );

  const Username = screen.getByText("Kasutajanimi");
  const Password = screen.getByText("Parool");
  const Email = screen.getByText("Email");

  expect(Username).toBeInTheDocument();
  expect(Password).toBeInTheDocument();
  expect(Email).toBeInTheDocument();
});
