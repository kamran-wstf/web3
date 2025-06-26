import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ComponentShowcase from './components/ComponentShowcase';
import Benefits from './components/Benefits';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import IntegrationProcess from './components/IntegrationProcess';
import CaseStudy from './components/CaseStudy';
import Security from './components/Security';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ShowProjects from './components/Project';
import ProjectShowcase from './components/Project';
import BlockchainMarquee from './components/supportedChain';
import ContactForm from './components/ContactFrom';

function App() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light text-white">
      <div className="grid-pattern min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProjectShowcase />
          <BlockchainMarquee/>
          <ProblemSolution />
          <ComponentShowcase />
          <Benefits />
          <CompetitiveAdvantage />
          <IntegrationProcess />
          {/* <CaseStudy /> */}
          <Security />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;