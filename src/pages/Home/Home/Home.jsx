import React from 'react';
import Banner from '../Banner/Banner';
import Awards from '../Awards/Awards';
import Services from '../Services/Services';
import Signature from '../Signature/Signature';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Awards></Awards>
           <Services></Services>
           <Signature></Signature>
        </div>
    );
};

export default Home;