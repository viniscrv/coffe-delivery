import { CartContainer, ClientCartContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";


export function ClientCart() {

    const { total, productsInCart } = useContext(CartContext);
    
    return (
        <ClientCartContainer>

            <h2>Cafés selecionados</h2>
            <CartContainer>

                {productsInCart.map((product: any) => {
                    return (
                        <div className="CartProducts" key={product.title}>
                            <div>
                                <img src={product.image} />
                                <div className="product">
                                    {product.title}
                                    <div>
                                        <div className="quantity-control">
                                            <button><Minus /></button>
                                                <span>{product.quantity}</span>
                                            <button><Plus /></button>
                                        </div>
                                        <button className="remove" >
                                            <span><Trash size={16}/></span>
                                            REMOVER
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span>R$ {product.price}</span>
                        </div>
                    );
                })}

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
                        <span>R$ {total}</span>
                    </div>

                    <button>CONFIRMAR PEDIDO</button>
                </div>
            </CartContainer>

        </ClientCartContainer>
    );
}