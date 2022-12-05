import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { AddressField, ClientDataContainer, PaymentField } from "./styles";

export function ClientData() {
    return (
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
                        <input placeholder="CEP" className="cep"/>
                        <input type="text" placeholder="Rua" />
                    </div>
                    <div className="complements">
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                    </div> 
                    <div className="add">
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
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
                    <input type="radio" name="formPayment" id="credit"/>
                    <label htmlFor="credit">
                        <span>
                            <CreditCard size={20} />
                        </span>
                        CARTÃO DE CRÉDITO
                    </label>
                    
                    <input type="radio" name="formPayment" id="debit"/>
                    <label htmlFor="debit">
                        <span>
                            <Bank size={20} />
                        </span>
                        CARTÃO DE DÉBITO
                    </label>
                    
                    <input type="radio" name="formPayment" id="money"/>
                    <label htmlFor="money">
                        <span>
                            <Money size={20} />
                        </span>
                        DINHEIRO
                    </label>
                </div>
            </PaymentField>
        </ClientDataContainer>
    );
}