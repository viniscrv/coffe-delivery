import { HighlightContainer, IconsHighlight } from "./styles";
import highlightImage from "../../../../assets/highlightImage.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Highlight() {
    return (
        <HighlightContainer>
            <div className="content">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="icons">
                    <div>
                        <IconsHighlight color="yellowDark">
                            <ShoppingCart weight="fill" size={15} />
                        </IconsHighlight>
                        Compra simples e segura
                    </div>
                    <div>
                        <IconsHighlight color="gray">
                            <Package weight="fill" size={15} />
                        </IconsHighlight>
                        Embalagem mantém o café intacto
                    </div>
                    <div>
                        <IconsHighlight color="yellow">
                            <Timer weight="fill" size={15} />
                        </IconsHighlight>
                        Entrega rápida e rastreada
                    </div>
                    <div>
                        <IconsHighlight color="purple">
                            <Coffee weight="fill" size={15} />
                        </IconsHighlight>
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