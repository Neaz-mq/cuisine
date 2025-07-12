import Weekly from '../Weekly/Weekly';
import Delights from '../Delights/Delights';
import Explore from '../Explore/Explore';
import Items from '../Items/Items';
import { useEffect } from 'react';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div>
           <Explore></Explore>
           <Items></Items>
           <Weekly></Weekly>
           <Delights></Delights>
        </div>
    );

};
export default Menu;