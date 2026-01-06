import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SystemOverview } from './components/SystemOverview';
import { HowItWorks } from './components/HowItWorks';
import { Architecture } from './components/Architecture';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Header />
      <main>
        <Hero />
        <SystemOverview />
        <HowItWorks />
        <Architecture />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
