import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} />
            </NavLink>
            <div>
                <button className="local">
                    <span><MapPin weight="fill" size={24}/></span>
                    Curitiba, PR
                </button>
                <NavLink to="/checkout" className="market">
                    <ShoppingCart weight="fill" size={24} />
                </NavLink>
            </div>
        </HeaderContainer>
    );
}