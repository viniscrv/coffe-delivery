import { Plus, Minus, ShoppingCart } from "phosphor-react";
import { CoffeCardContainer } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeCardProps {
    image: string;
    category: string[];
    title: string;
    description: string;
    price: number;
}

export function CoffeCard( {image, category, title, description, price} : CoffeCardProps) {

    const { handleAddNewProductAtCart } = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(1);

    function sumQuantity() {
        if (quantity < 20){
            setQuantity(state => state + 1);
        }
    }

    function subQuantity() {
        if(quantity > 1){
            setQuantity(state => state - 1);
        }
    }

    function submitProductsAtCart() {

        handleAddNewProductAtCart(priceTotal);
        setQuantity(1);
    }

    let priceTotal = Number((price*quantity).toFixed(2));

    return(
        <CoffeCardContainer>
            <img src={image} />
            <div>
                {category.map(item => {
                    return (
                        <span key={item} className="tag">{item}</span>
                    );
                })}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>
            <footer>
                <span className="price">{priceTotal}</span>
                <div className="quantity-control">
                    <button onClick={subQuantity}><Minus /></button>
                        <span>{quantity}</span> 
                    <button onClick={sumQuantity}><Plus /></button> 
                </div>

                <button 
                    className="btn-cart"
                    onClick={submitProductsAtCart}
                    >
                    <ShoppingCart weight="fill" size={18}/>
                </button>
            </footer>
        </CoffeCardContainer>
    );
}