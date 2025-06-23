import Brew from "../Brew/Brew";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";
import Weekly from "../Weekly/Weekly";

const Categories = () => {
    return (
        <div>
             <Category></Category>
             <Weekly></Weekly>
             <Popular></Popular>
             <Brew></Brew>
        </div>
    );
};

export default Categories;