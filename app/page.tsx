
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import SecondSection from '../Components/SecondSection';
import ThirdSection from '../Components/ThirdSection';
import FourthSection from '../Components/FourthSection';
import FifthSection from '../Components/FifthSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import FAQSection from '../Components/FAQSection'; 
import Footer from '../Components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <TestimonialsSection /> 
      <FAQSection /> 
      <Footer /> 
    </>
  );
}
