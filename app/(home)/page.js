import Approaches from "./components/Approaches";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Cost from "./components/Cost";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Industry from "./components/Industry";
import RecentProjects from "./components/RecentProjects";
import Solution from "./components/Solutions";
import StatsSection from "./components/StateSection";
import TestimonialSection from "./components/Testimonals";

export default function MainPage() {
  return <div>
    <Hero />
    <Solution />
    <StatsSection />
    <RecentProjects />
    <Approaches />
    <Cost />
    <Industry />
    <TestimonialSection />
    <Contact />
    <Footer />
    <Copyright />
  </div>;
}
