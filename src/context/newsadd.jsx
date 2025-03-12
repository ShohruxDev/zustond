import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
    const [wishlist, setwishlist] = useState([]);
    const [basket, setBasket] = useState([])
    const handleAddToBasket = (user) => {
        setBasket((prevBasket) => {
            console.log(prevBasket,user);
            
            const isExist = prevBasket.some((item) => item.id == user.id);
            if (!isExist) {
                return [...prevBasket, user];
            }
            return prevBasket;
        });
    };
    return (
        <NewsContext.Provider value={{ wishlist, setwishlist, basket, setBasket , handleAddToBasket }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useStateValue = () => {
    return useContext(NewsContext);
};

export default NewsProvider;
