import Reserve from "../Reserve/Reserve";
import Spend from "../Spend/Spend";
import { useEffect } from 'react';

const Tables = () => {
    useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
    return (
        <div>
           <Reserve></Reserve>
           <Spend></Spend>
        </div>
    );
};

export default Tables; 