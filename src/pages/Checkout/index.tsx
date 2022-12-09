import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, productInCart } from "../../contexts/CartContext";
import { AddressField, CartContainer, CheckoutContainer, ClientCartContainer, ClientDataContainer, PaymentField } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface FormDeliveryValidation {
    cep: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
}

const schema = yup.object({
    cep: yup.string().required(),
    address: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    district: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
}).required();

export function Checkout() {

    const { total, productsInCart, sumProductQuantity, subProductQuantity, removeProductAtCart, fillDeliveryData } = useContext(CartContext);

    const deliveryFee = 3.70;
    const totalPurchase = (total + deliveryFee).toFixed(2);

    function handleRemoveProductatCart(id: string) {
        removeProductAtCart(id);
    }

    function handleSubProductQuantity(id: string) {
        subProductQuantity(id);
    }

    function handleAddProductQuantity(id: string) {
        sumProductQuantity(id);
    }
            
    const [formPayment, setFormPayment] = useState("");

    const { register, handleSubmit } = useForm<FormDeliveryValidation>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    function handleSendDeliveryData(data: FormDeliveryValidation) {

        fillDeliveryData({...data, formPayment: formPayment});
        navigate("/success");
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

                    <form id="address-form" onSubmit={handleSubmit(handleSendDeliveryData)}>
                        <div className="address">
                            <input placeholder="CEP*" className="cep" {...register("cep")} />
                            <input type="text" placeholder="Rua*" {...register("address")} />
                        </div>
                        <div className="complements">
                            <input type="text" placeholder="Número*" {...register("number")} />
                            <input type="text" placeholder="Complemento" {...register("complement")} />
                        </div> 
                        <div className="add">
                            <input type="text" placeholder="Bairro*" {...register("district")} />
                            <input type="text" placeholder="Cidade*" {...register("city")} />
                            <input type="text" placeholder="UF*" {...register("state")} />
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
                                            <button className="remove" onClick={() => handleRemoveProductatCart(product.id)} >
                                                <span><Trash size={18}/></span>
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
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>R$ {deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="totalPrice">
                            <p>Total</p>
                            <span>R$ {totalPurchase}</span>
                        </div>

                        <button className="btn-confirm" form="address-form">CONFIRMAR PEDIDO</button>
                    </div>
                </CartContainer>
            </ClientCartContainer>

        </CheckoutContainer>
    );
}