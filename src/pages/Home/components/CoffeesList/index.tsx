import { CoffeeCard } from "../CoffeeCard";
import { CoffeesListContainer } from "./styles";
import { coffees } from "../../../../data/coffees"

export function CoffeesList() {

    return (
        <CoffeesListContainer>
            <h2>Nossos cafés</h2>
            <div>
                { coffees.map( (coffee) => {
                    return (
                        <CoffeeCard 
                        key={coffee.id}
                        id={coffee.id}
                        image={coffee.image}
                        category={coffee.category}
                        title={coffee.title}
                        description={coffee.description}
                        price={coffee.price}
                        />
                    )
                })}
            </div>
        </CoffeesListContainer>
    )
}