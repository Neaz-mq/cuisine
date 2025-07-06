import Awards from "../Awards/Awards";
import Famous from "../Famous/Famous";
import Members from "../Members/Members";
import Support from "../Support/Support";
import { useEffect } from 'react';


const Chefs = () => {
    useEffect(() => {
            // Scroll to the top of the page when the component mounts
            window.scrollTo(0, 0);
        }, []);
    return (
        <div>
           <Awards></Awards>
           <Famous></Famous>
           <Support></Support>
           <Members></Members>
        </div>
    );
};

export default Chefs;