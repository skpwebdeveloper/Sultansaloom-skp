import { useState } from 'react';
import { BookingSection } from './components/BookingSection';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { ClientReviews } from './components/ClientReviews';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServiceCatalog } from './components/ServiceCatalog';
import { StudioShowcase } from './components/StudioShowcase';
import { SALON_SERVICES } from './data/salonData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SALON_SERVICES[0].id);

  const scrollToBooking = () => {
    const visitSection = document.getElementById('visit');
    if (visitSection) {
      visitSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#171614]">
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1">
        <Hero onBookClick={scrollToBooking} />
        <CapabilitiesBento />
        <StudioShowcase onBookGroom={() => handleSelectService('event-styling')} />
        <ServiceCatalog onSelectService={handleSelectService} />
        <ClientReviews />
        <BookingSection
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />
      </main>

      <Footer />
    </div>
  );
}
