
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    };

    return (
        <CartContext.Provider value={{ count, increaseCount, decreaseCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};