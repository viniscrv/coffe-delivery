import { MapPin } from "phosphor-react"
import illustration from "../../assets/illustration.png"
import { SuccessContainer } from "./styles"


export function Success() {
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
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                            <p>Farrapos - Porto Alegre, RS</p>
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
                            <p><strong>Cartão de Crédito</strong></p>
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