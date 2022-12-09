import tradicional from "../assets/coffes/tradicional.png";
import americano from "../assets/coffes/americano.png";
import arabe from "../assets/coffes/arabe.png";
import cafeComLeite from "../assets/coffes/cafeComLeite.png";
import capuccino from "../assets/coffes/capuccino.png";
import chocolateQuente from "../assets/coffes/chocolateQuente.png";
import cremoso from "../assets/coffes/cremoso.png";
import cubano from "../assets/coffes/cubano.png";
import gelado from "../assets/coffes/gelado.png";
import havaiano from "../assets/coffes/havaiano.png";
import irlandes from "../assets/coffes/irlandes.png";
import latte from "../assets/coffes/latte.png";
import macchiato from "../assets/coffes/macchiato.png";
import mocaccino from "../assets/coffes/mocaccino.png";

export const coffees = [
    {
    id: "1",
    image: `${tradicional}`,
    category: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90
    },
    {
    id: "2",
    image: `${americano}`,
    category: ["TRADICIONAL"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90
    },
    {
    id: "3",
    image: `${arabe}`,
    category: ["ESPECIAL"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90
    },
    {
    id: "4",
    image: `${cafeComLeite}`,
    category: ["TRADICIONAL", "COM LEITE"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90
    },
    {
    id: "5",
    image: `${capuccino}`,
    category: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90
    },
    {
    id: "6",
    image: `${chocolateQuente}`,
    category: ["ESPECIAL", "COM LEITE"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90
    },
    {
    id: "7",
    image: `${cremoso}`,
    category: ["TRADICIONAL"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90
    },
    {
    id: "8",
    image: `${cubano}`,
    category: ["ALCOÓLICO", "ESPECIAL", "GELADO"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90
    },
    {
    id: "9",
    image: `${gelado}`,
    category: ["GELADO", "TRADICIONAL"],
    title: "Expresso Gelado",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90
    },
    {
    id: "10",
    image: `${havaiano}`,
    category: ["TRADICIONAL"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90
    },
    {
    id: "11",
    image: `${irlandes}`,
    category: ["ALCOÓLICO", "ESPECIAL"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90
    },
    /* 
    {
    id: "12",
    image: `${latte}`,
    category: ["TRADICIONAL", "COM LEITE"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90
    },
    {
    id: "13",
    image: `${macchiato}`,
    category: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90
    },
    {
    id: "14",
    image: `${mocaccino}`,
    category: ["TRADICIONAL", "COM LEITE"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90
    }, */
]