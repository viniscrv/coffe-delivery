import { createContext, ReactNode, useState } from "react";

interface CartContextType {
    total: number;
    totalQuantity: number;
    productsInCart: productInCart[];
    deliveryData: deliveryDataType;
    addNewProductAtCart: ({}: productInCart) => void;
    removeProductAtCart: (id: string) => void;
    sumProductQuantity: (id: string) => void;
    subProductQuantity: (id: string) => void;
    fillDeliveryData: (data: deliveryDataType) => void;
    clearCart: () => void;
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

export interface deliveryDataType {
    cep: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    formPayment: string;
}

export function CartContextProvider({children}: CartContextProviderProps) {

    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [productsInCart, setProductsInCart] = useState<productInCart[]>([]);

    function addNewProductAtCart({id, image, title, quantity, price, priceTotal}: productInCart) {

        setTotal(state => state + priceTotal);
        setTotalQuantity(state => state + quantity);
        
        const productAdded: productInCart = {
            id: id,
            image: image,
            title: title,
            quantity: quantity,
            price: price,
            priceTotal: priceTotal,
        }

        setProductsInCart(state => [...state, productAdded]);
    }

    function removeProductAtCart(id: string) {
        setProductsInCart((state) => state.filter((product) => {
            if (product.id !== id) {
                return product;
            }
            setTotal(state => state - product.priceTotal);
            setTotalQuantity(state => state - product.quantity);
        }));
    }

    function sumProductQuantity(id: string) {

        setProductsInCart((state) => state.map((product) => {
            if(product.id === id) {
                if(product.quantity < 20){
                    setTotal(state => state + product.price);
                    setTotalQuantity(state => state + 1);
                    return {...product, quantity: product.quantity + 1, priceTotal: product.priceTotal + product.price};
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
                    return {...product, quantity: product.quantity - 1, priceTotal: product.priceTotal - product.price};
                }
                return product;
            } 
            return product;
        }));
    }

    function clearCart() {
        setTotal(0);
        setTotalQuantity(0);
        setProductsInCart([]);
    }

    const [ deliveryData, setDeliveryData ] = useState<deliveryDataType | any>();

    function fillDeliveryData({cep, address, number, complement, district, city, state, formPayment}: deliveryDataType) {

        setDeliveryData({
            cep: cep,
            address: address,
            number: number,
            complement: complement,
            district: district,
            city: city,
            state: state,
            formPayment: formPayment,
        });

        console.log(deliveryData);
    }

    return (
       <CartContext.Provider value={{
        addNewProductAtCart, 
        sumProductQuantity,
        subProductQuantity,
        fillDeliveryData,
        removeProductAtCart,
        clearCart,
        deliveryData,
        productsInCart,
        total, 
        totalQuantity,
        }}>
            {children}
       </CartContext.Provider> 
    );
}