import { createContext, ReactNode, useState } from "react";

interface CartContextType {
    total: number;
    totalQuantity: number;
    productsInCart: productInCart[];
    deliveryData: deliveryDataType;
    addNewProductAtCart: ({}: productInCart) => void;
    sumProductQuantity: (id: string) => void;
    subProductQuantity: (id: string) => void;
    fillDeliveryData: (data: deliveryDataType) => void;
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

interface deliveryDataType {
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
    }

    return (
       <CartContext.Provider value={{
        addNewProductAtCart, 
        sumProductQuantity,
        subProductQuantity,
        fillDeliveryData,
        deliveryData,
        productsInCart,
        total, 
        totalQuantity,
        }}>
            {children}
       </CartContext.Provider> 
    );
}