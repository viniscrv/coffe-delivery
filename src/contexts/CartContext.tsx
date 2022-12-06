import { createContext, ReactNode, useState,  } from "react";

interface CartContextType {
    total: number;
    handleAddNewProductAtCart: (quantity:number) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps) {

    const [total, setTotal] = useState(0);

    function handleAddNewProductAtCart(quantity:number) {

        setTotal(state => state + quantity);
        console.log(total);
    }

    return (
       <CartContext.Provider value={{handleAddNewProductAtCart, total}}>
            {children}
       </CartContext.Provider> 
    );
}