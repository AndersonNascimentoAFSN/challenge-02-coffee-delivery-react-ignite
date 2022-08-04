import { MapPin, ShoppingCart } from "phosphor-react";
import { Cart, Container, LocationWrapper } from "./styles";

export function Actions() {
  return (
    <Container>
      <LocationWrapper>
        <MapPin size={22} weight="fill" />
        <span>Maceió, AL</span>
      </LocationWrapper>

      <Cart>
        <ShoppingCart size={22} weight="fill" />
      </Cart>
    </Container>
  );
}
