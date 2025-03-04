import Image from "next/image";
import BubblesCanvas from './components/BubblesCanvas'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Servizi from './components/Servizi'
import About from './components/About'
import ContactPage from './components/ContactPage';
import Footer from './components/footer'
export default function Home() {
  return (
    <>
    <Navigation />
    <BubblesCanvas />
    <Header />
    <Servizi />
    <About />
    <ContactPage />
    <Footer />
    </>
    
  );
}
