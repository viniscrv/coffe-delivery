import { MapPin } from "phosphor-react"
import { useContext } from "react"
import illustration from "../../assets/illustration.png"
import { CartContext } from "../../contexts/CartContext"
import { SuccessContainer } from "./styles"


export function Success() {

    const { deliveryData } = useContext(CartContext);

    return (
        <SuccessContainer>
            <header>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>
            <main>
                <div className="delivery-info">
                    <div>
                        <span><MapPin size={18}/></span>
                        <div>
                            <p>Entrega em <strong>{deliveryData.address}</strong></p>
                            <p>{deliveryData.district} - {deliveryData.city}, {deliveryData.state}</p>
                        </div>
                    </div>
                    <div>
                        <span><MapPin size={18}/></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min </strong></p>
                        </div>
                    </div>
                    <div>
                        <span><MapPin size={18}/></span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{deliveryData.formPayment}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="illustration">
                    <img src={illustration}/>
                </div>
            </main>
        </SuccessContainer>
    )
}