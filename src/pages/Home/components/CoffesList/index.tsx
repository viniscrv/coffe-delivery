import { CoffeCard } from "../CoffeCard";
import { CoffesListContainer } from "./styles";
import { coffes } from "../../../../data/coffes"

export function CoffesList() {

    return (
        <CoffesListContainer>
            <h2>Nossos cafés</h2>
            <div>
                { coffes.map( (coffe) => {
                    return (
                        <CoffeCard 
                        key={coffe.id}
                        id={coffe.id}
                        image={coffe.image}
                        category={coffe.category}
                        title={coffe.title}
                        description={coffe.description}
                        price={coffe.price}
                        />
                    )
                })}
            </div>
        </CoffesListContainer>
    )
}