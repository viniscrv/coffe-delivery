import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {

    const { totalQuantity } = useContext(CartContext);

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
                    {totalQuantity > 0 ? (
                        <div className="badge">{totalQuantity}</div>
                    ): null}
                    <ShoppingCart weight="fill" size={24} />
                </NavLink>
            </div>
        </HeaderContainer>
    );
}