import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Cta } from './sections/Cta';
import { Differentials } from './sections/Differentials';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Modalities } from './sections/Modalities';
import { PersonalTrainers } from './sections/PersonalTrainers';
import { Plans } from './sections/Plans';
import { Testimonials } from './sections/Testimonials';

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
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
