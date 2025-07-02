import Weekly from '../Weekly/Weekly';
import Delights from '../Delights/Delights';
import Explore from '../Explore/Explore';
import Items from '../Items/Items';
import { useEffect } from 'react';


const Menu = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []); // The empty dependency array makes this run once on mount

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