import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Buffet from './Buffet/Buffet';
import Signature from '../Signature/Signature';
import Testimonials from '../Testimonials/Testimonials';
import Deliver from './Deliver/Deliver';

const Home = () => {
    return (
        <div>
           <Banner></Banner>          
           <Services></Services>
           <Buffet></Buffet>    
           <Signature></Signature>          
           <Testimonials></Testimonials>   
           {/* <Deliver></Deliver> */}
        </div>
    );
};

export default Home;