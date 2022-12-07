import { createContext, ReactNode, useState,  } from "react";

interface CartContextType {
    total: number;
    totalQuantity: number;
    productsInCart: productInCart[];
    addNewProductAtCart: ({}: productInCart) => void;
    sumProductQuantity: (id: string) => void;
    subProductQuantity: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export interface productInCart {
    id: string;
    image: string;
    title: string;
    quantity: number;
    price: number;
    priceTotal: number;
}

export function CartContextProvider({children}: CartContextProviderProps) {

    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [productsInCart, setProductsInCart] = useState<productInCart[]>([]);

    function addNewProductAtCart({id, image, title, quantity, price, priceTotal}: productInCart) {

        setTotal(state => state + priceTotal);
        setTotalQuantity(state => state + quantity);
        // console.log(total);

        const productAdded: productInCart = {
            id: id,
            image: image,
            title: title,
            quantity: quantity,
            price: price,
            priceTotal: priceTotal,
        }

        setProductsInCart(state => [...state, productAdded]);

        console.log(productsInCart);
    }

    function sumProductQuantity(id: string) {

        setProductsInCart((state) => state.map((product) => {
            if(product.id === id) {
                if(product.quantity < 20){
                    setTotal(state => state + product.priceTotal);
                    setTotalQuantity(state => state + 1);
                    return {...product, quantity: product.quantity + 1};
                }
                return product;
            } 
            return product;
        }));
    }

    function subProductQuantity(id: string) {

        setProductsInCart((state) => state.map((product) => {
            if(product.id === id) {
                if (product.quantity > 1){
                    setTotal(state => state - product.price);
                    setTotalQuantity(state => state - 1);
                    return {...product, quantity: product.quantity - 1};
                }
                return product;
            } 
            return product;
        }));
    }

    return (
       <CartContext.Provider value={{
        addNewProductAtCart, 
        sumProductQuantity,
        subProductQuantity,
        productsInCart,
        total, 
        totalQuantity,
        }}>
            {children}
       </CartContext.Provider> 
    );
}