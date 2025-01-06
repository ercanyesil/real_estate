import './App.css';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/Hero/HeroSection';
import Properties from './components/Properties';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutUs />
      <Properties />
      <Blogs />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
