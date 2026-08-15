import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Modalities } from './sections/Modalities/Modalities';
import { Plans } from './sections/Plans/Plans';
import { PersonalTrainers } from './sections/PersonalTrainers/PersonalTrainers';
import { Gallery } from './sections/Gallery/Gallery';
import { Differentials } from './sections/Differentials/Differentials';
import { Testimonials } from './sections/Testimonials/Testimonials';
import { CTA } from './sections/CTA/CTA';
import { Contact } from './sections/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Plans />
        <PersonalTrainers />
        <Gallery />
        <Differentials />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
