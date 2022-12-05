import { CartContainer, ClientCartContainer } from "./styles";
import coffeExemple from "../../../../assets/coffes/tradicional.png"
import { Minus, Plus, Trash } from "phosphor-react";


export function ClientCart() {
    return (
        <ClientCartContainer>

            <h2>Cafés selecionados</h2>
            <CartContainer>
                <div className="CartProducts">
                    <img src={coffeExemple} />
                    <div>
                        Expresso tradicional
                        <div className="quantity-control">
                            <button><Minus /></button>
                                <span>1</span> 
                            <button><Plus /></button>
                        </div>
                    </div>
                    <span>R$ 9,90</span>
                </div>

                <div className="confirmOrder">
                    <div>
                        <p>Total de itens</p>
                        <span>R$ 29,70</span>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <span>R$ 3,70</span>
                    </div>
                    <div className="totalPrice">
                        <p>Total</p>
                        <span>R$ 33,70</span>
                    </div>

                    <button>CONFIRMAR PEDIDO</button>
                </div>
            </CartContainer>

        </ClientCartContainer>
    );
}