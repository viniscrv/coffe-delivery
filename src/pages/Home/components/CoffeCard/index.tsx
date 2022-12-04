import { Plus, Minus, ShoppingCart } from "phosphor-react";
import tradicional from "../../../../assets/coffes/tradicional.png";
import { CoffeCardContainer } from "./style";


export function CoffeCard() {
    return(
        <CoffeCardContainer>
            <img src={tradicional} />
            <span className="tag">TRADICIONAL</span>
            <strong>Expresso Tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <footer>
                <span className="price">9,90</span>
                <div className="quantity-control">
                    <button><Minus /></button>
                        <span>1</span> 
                    <button><Plus /></button> 
                </div>
                <button className="btn-cart">
                    <ShoppingCart weight="fill" size={18}/>
                </button>
            </footer>
        </CoffeCardContainer>
    );
}