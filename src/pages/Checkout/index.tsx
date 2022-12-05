import { ClientCart } from "./components/ClientCart";
import { ClientData } from "./components/ClientData";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <ClientData/>
            <ClientCart/>
        </CheckoutContainer>
    );
}