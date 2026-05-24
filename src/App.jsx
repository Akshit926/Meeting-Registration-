import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <EventDetails />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
