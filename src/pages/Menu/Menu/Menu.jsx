import Delights from '../Delights/Delights';
import Explore from '../Explore/Explore';
import Items from '../Items/Items';

const Menu = () => {
    return (
        <div>
           <Explore></Explore>
           <Items></Items>
           {/* <Delights></Delights> */}
        </div>
    );
};

export default Menu;