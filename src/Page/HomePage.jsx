import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SpecialOffer from "../components/ComponentPage/SpecialOffer";
import TravelSection from "../components/ComponentPage/TravelSection";
import DestinationSuggestions from "../components/ComponentPage/DestinationSuggestions ";
import TestimonialCard from "../components/ComponentPage/TestimonialCard";
import Sidebar from "../layout/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Navbar />
      <SpecialOffer />
      <TravelSection />
      <DestinationSuggestions />
      <TestimonialCard />
      <Footer />
    </div>
  );
};

export default HomePage;
