import { createContext, ReactNode, useState,  } from "react";

interface CartContextType {
    total: number;
    productsInCart: any;
    handleAddNewProductAtCart: ({}: any) => void;
}

export const CartContext = createContext({} as CartContextType);


interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps) {

    const [total, setTotal] = useState(0);

    const [productsInCart, setProductsInCart] = useState<any>([]);


    interface productAddedProps {
        id: string;
        priceTotal: number;
        quantity: number;
        image: string;
        title: string;
        price: number;
    }

    function handleAddNewProductAtCart({id, priceTotal, quantity, image, title, price}: productAddedProps) {

        setTotal(state => state + priceTotal);
        console.log(total);
        const productAdded: productAddedProps = {
            id: id,
            priceTotal: priceTotal,
            image: image,
            title: title,
            price: price,
            quantity: quantity,
        }
        setProductsInCart([...productsInCart, productAdded]) 
    }

    return (
       <CartContext.Provider value={{
        handleAddNewProductAtCart, 
        productsInCart,
        total, 
        }}>
            {children}
       </CartContext.Provider> 
    );
}