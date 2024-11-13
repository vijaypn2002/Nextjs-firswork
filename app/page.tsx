// app/page.tsx
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import SecondSection from '../Components/SecondSection';
import ThirdSection from '../Components/ThirdSection';
import FourthSection from '../Components/FourthSection'; // Import the new FourthSection
import FifthSection from '../Components/FifthSection'; // Import the new FifthSection

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection /> {/* Add the FourthSection component here */}
      <FifthSection /> {/* Add the FifthSection component here */}
      
    </>
  );
}
