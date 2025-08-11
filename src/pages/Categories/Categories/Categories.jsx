import  { useEffect } from 'react'; 
import Brew from "../Brew/Brew";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";

const Categories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div> 
            <Category></Category>
            <Popular></Popular>
            {/* <Brew></Brew> */}
        </div>
    );
};

export default Categories;