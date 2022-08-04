import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Container } from "./styles";

export function DefaultLayout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
