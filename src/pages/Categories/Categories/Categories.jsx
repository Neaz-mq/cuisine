import Brew from "../Brew/Brew";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";


const Categories = () => {
    return (
        <div>
             <Category></Category>   
             <Popular></Popular>
             <Brew></Brew>
        </div>
    );
};

export default Categories;