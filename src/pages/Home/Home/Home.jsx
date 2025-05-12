import React from 'react';
import Banner from '../Banner/Banner';
// import Awards from '../Awards/Awards';
import Services from '../Services/Services';
import Buffet from './Buffet/Buffet';
//import Signature from '../Signature/Signature';
//import Testimonials from '../Testimonials/Testimonials';
//import Deliver from './Deliver/Deliver';
//import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           {/* <Awards></Awards> */}
           <Services></Services>
           <Buffet></Buffet>
           {/* <Signature></Signature> */}
           {/* <Testimonials></Testimonials> */}
           {/* <Team></Team> */}
           {/* <Deliver></Deliver> */}
        </div>
    );
};

export default Home;