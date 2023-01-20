import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "../pages/Register";
import { AuthContextProvider } from "../context/AuthContext";
test("Register form values", async () => {
  render(
    <AuthContextProvider>
      <Router>
        <Register />
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
