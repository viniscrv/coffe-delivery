import { HighlightContainer } from "./styles";
import highlightImage from "../../../../assets/highlightImage.png";
import { ShoppingCart } from "phosphor-react";


export function Highlight() {
    return (
        <HighlightContainer>
            <div className="content">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="icons">
                    <div>
                        <span>
                            <ShoppingCart weight="fill" size={12} />
                        </span>
                        Compra simples e segura
                    </div>
                    <div>
                        <span>
                            <ShoppingCart weight="fill" size={12} />
                        </span>
                        Embalagem mantém o café intacto
                    </div>
                    <div>
                        <span>
                            <ShoppingCart weight="fill" size={12} />
                        </span>
                        Entrega rápida e rastreada
                    </div>
                    <div>
                        <span>
                            <ShoppingCart weight="fill" size={12} />
                        </span>
                        O café chega fresquinho até você
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={highlightImage} />
            </div>
        </HighlightContainer>
    );
}