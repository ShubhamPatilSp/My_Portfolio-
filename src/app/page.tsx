import HeroSection from "./componets/HeroSection";
import Instructors from "./componets/Instructos";
import MusicSchoolTestTestimonial from "./componets/TestimonialCard";
import UpcomingWebinars from "./componets/UpcomingWebinars";
import WhyChooseUs from "./componets/WhyChooseUs";
import FeaturedCourses from "./componets/featuredCourses";
import Footer from "./componets/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses/>
    {/* <WhyChooseUs/> */}
    <MusicSchoolTestTestimonial/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
