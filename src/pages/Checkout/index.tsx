import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext, productInCart } from "../../contexts/CartContext";
import { AddressField, CartContainer, CheckoutContainer, ClientCartContainer, ClientDataContainer, PaymentField } from "./styles";

export function Checkout() {

    const { total, productsInCart, sumProductQuantity, subProductQuantity, totalQuantity, fillDeliveryData } = useContext(CartContext);

    const totalItems = (totalQuantity*9.90).toFixed(2);
    const deliveryFee = 3.70;
    const totalPurchase = (total + deliveryFee).toFixed(2);

    function handleSubProductQuantity(id: string) {
        subProductQuantity(id);
    }

    function handleAddProductQuantity(id: string) {
        sumProductQuantity(id);
    }

    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [formPayment, setFormPayment] = useState("");

    function handleSendDeliveryData(){
        fillDeliveryData({
            cep: cep,
            address: address,
            number: number,
            complement: complement,
            district: district,
            city: city,
            state: state,
            formPayment: formPayment,
        });
    }

    return (
        <CheckoutContainer>

            <ClientDataContainer>

                <h2>Complete seu pedido</h2>
                <AddressField>
                    <header>
                        <span><MapPin size={24}/></span>
                        <div>
                            <p>Endereço da entrega</p>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </header>

                    <form>
                        <div className="address">
                            <input placeholder="CEP" className="cep" onChange={(e) => setCep(e.target.value)} value={cep} />
                            <input type="text" placeholder="Rua" onChange={(e) => setAddress(e.target.value)} value={address} />
                        </div>
                        <div className="complements">
                            <input type="text" placeholder="Número" onChange={(e) => setNumber(e.target.value)} value={number} />
                            <input type="text" placeholder="Complemento" onChange={(e) => setComplement(e.target.value)} value={complement} />
                        </div> 
                        <div className="add">
                            <input type="text" placeholder="Bairro" onChange={(e) => setDistrict(e.target.value)} value={district} />
                            <input type="text" placeholder="Cidade" onChange={(e) => setCity(e.target.value)} value={city} />
                            <input type="text" placeholder="UF" onChange={(e) => setState(e.target.value)} value={state} />
                        </div>
                    </form>
                </AddressField>

                <PaymentField>
                    <header>
                        <span><CurrencyDollar size={24}/></span>
                        <div>
                            <p>Pagamento</p>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </div>
                    </header>

                    <div className="optionsPayment">
                        <input type="radio" name="formPayment" id="credit" value="Cartão de Crédito" onChange={(e) => setFormPayment(e.target.value)}/>
                        <label htmlFor="credit">
                            <span>
                                <CreditCard size={20} />
                            </span>
                            CARTÃO DE CRÉDITO
                        </label>
                        
                        <input type="radio" name="formPayment" id="debit" value="Cartão de Débito" onChange={(e) => setFormPayment(e.target.value)}/>
                        <label htmlFor="debit">
                            <span>
                                <Bank size={20} />
                            </span>
                            CARTÃO DE DÉBITO
                        </label>
                        
                        <input type="radio" name="formPayment" id="money" value="Dinheiro" onChange={(e) => setFormPayment(e.target.value)}/>
                        <label htmlFor="money">
                            <span>
                                <Money size={20} />
                            </span>
                            DINHEIRO
                        </label>
                    </div>
                </PaymentField>
            </ClientDataContainer>
            
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

                        <NavLink to="/success" >
                            <button className="btn-confirm" onClick={handleSendDeliveryData}>CONFIRMAR PEDIDO</button>
                        </NavLink>
                    </div>
                </CartContainer>
            </ClientCartContainer>

        </CheckoutContainer>
    );
}