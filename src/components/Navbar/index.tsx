import { Container, Logo } from "./styles";
import logo from "../../assets/logo.svg";
import { Actions } from "../Actions";

export function Navbar() {
  return (
    <Container>
      <Logo src={logo} alt="Coffee Delivery logo" />
      <Actions />
    </Container>
  );
}
