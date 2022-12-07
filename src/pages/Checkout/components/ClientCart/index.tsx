import { CartContainer, ClientCartContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext, productInCart } from "../../../../contexts/CartContext";
import { NavLink } from "react-router-dom";


export function ClientCart() {

    const { total, productsInCart, sumProductQuantity, subProductQuantity, totalQuantity } = useContext(CartContext);

    const totalItems = (totalQuantity*9.90).toFixed(2);
    const deliveryFee = 3.70;
    const totalPurchase = (total + deliveryFee).toFixed(2);

    function handleSubProductQuantity(id: string) {
        subProductQuantity(id);
    }

    function handleAddProductQuantity(id: string) {
        sumProductQuantity(id);
    }
    
    return (
        <ClientCartContainer>

            <h2>Cafés selecionados</h2>
            <CartContainer>

                {productsInCart.map((product: productInCart) => {
                    return (
                        <div className="CartProducts" key={product.title}>
                            <div>
                                <img src={product.image} />
                                <div className="product">
                                    {product.title}
                                    <div>
                                        <div className="quantity-control">
                                            <button onClick={() => handleSubProductQuantity(product.id)}><Minus /></button>
                                                <span>{product.quantity}</span>
                                            <button onClick={() => handleAddProductQuantity(product.id)}><Plus /></button>
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
                        <span>R$ {totalItems}</span>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <span>R$ {deliveryFee}</span>
                    </div>
                    <div className="totalPrice">
                        <p>Total</p>
                        <span>R$ {totalPurchase}</span>
                    </div>

                    <NavLink to="/success" className="btn-confirm">CONFIRMAR PEDIDO</NavLink>
                </div>
            </CartContainer>

        </ClientCartContainer>
    );
}