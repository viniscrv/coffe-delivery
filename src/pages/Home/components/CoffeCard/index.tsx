import { Plus, Minus, ShoppingCart } from "phosphor-react";
import { CoffeCardContainer } from "./style";
import { NavLink } from "react-router-dom";

interface CoffeCardProps {
    image: string;
    category: string[];
    title: string;
    description: string;
    price: number;
}

export function CoffeCard( {image, category, title, description, price} : CoffeCardProps) {
    return(
        <CoffeCardContainer>
            <img src={image} />
            <div>
                {category.map(item => {
                    return (
                        <span className="tag">{item}</span>
                    );
                })}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>
            <footer>
                <span className="price">{price}</span>
                <div className="quantity-control">
                    <button><Minus /></button>
                        <span>1</span> 
                    <button><Plus /></button> 
                </div>

                <NavLink to="/checkout" className="btn-cart">
                    <ShoppingCart weight="fill" size={18}/>
                </NavLink>
            </footer>
        </CoffeCardContainer>
    );
}