import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import HallOfFame from './components/HallOfFame';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <EventDetails />
        <HallOfFame />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
