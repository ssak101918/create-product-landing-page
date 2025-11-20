import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
