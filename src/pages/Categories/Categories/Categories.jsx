import  { useEffect } from 'react'; // Import useEffect
import Brew from "../Brew/Brew";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";

const Categories = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []); // The empty dependency array makes this run once on mount

    return (
        <div>
            <Category></Category>
            <Popular></Popular>
            <Brew></Brew>
        </div>
    );
};

export default Categories;