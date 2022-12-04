import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/logo.png";
import { HeaderContainer } from "./styles";

export function DefaultLayout() {
    return (
        <HeaderContainer>
            <img src={logo} />
            <div>
                <button className="local">
                    <span><MapPin weight="fill" size={24}/></span>
                    Curitiba, PR
                </button>
                <button className="market">
                    <ShoppingCart weight="fill" size={24} />
                </button>
            </div>
        </HeaderContainer>
    );
}