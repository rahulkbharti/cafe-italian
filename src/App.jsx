// import Header from './components/Header/Header'
import TopNav from './sections/TopNav/TopNav'
import "./App.css";
import Hero from './sections/Hero/Hero';
import OurMenu from './sections/OurMenu/OurMenu';
import OurOffer from './sections/OurOffer/OurOffer';
import MonthlyHighlight from './sections/MonthlyHighlight/MonthlyHighlight';
import OurSpecial from './sections/OurSpecial/OurSpecial';
import OurGuest from './sections/OurGeust/OurGeust';
import ContactUs from './sections/ContactUs/ContactUs';
import PrivateDining from './sections/PrivateDining/PrivateDining';
import Footer from './sections/Footer/Footer';
import FollowUs from './sections/FollowUS/FollowUs';

function App() {
  return (
    <>
      <TopNav />
      <Hero />
      <OurMenu />
      <OurOffer />
      <OurSpecial />
      <MonthlyHighlight />
      <PrivateDining />
      <OurGuest />
      <FollowUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
