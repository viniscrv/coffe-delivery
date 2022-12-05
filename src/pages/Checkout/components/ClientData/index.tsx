import { MapPin } from "phosphor-react";
import { AddressField, ClientDataContainer, PaymentField } from "./styles";

export function ClientData() {
    return (
        <ClientDataContainer>

            <h2>Complete seu pedido</h2>
            <AddressField>
                <header>
                    <span><MapPin size={20}/></span>
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

            </PaymentField>
        </ClientDataContainer>
    );
}