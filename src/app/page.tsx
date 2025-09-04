import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HorizontalGallery from '@/components/HorizontalGallery';
import ModelPortfolio from '@/components/WorkShowcase';
import ModelServices from '@/components/ValueCards';
import ModelTestimonials from '@/components/SocialProof';
import ModelGallery from '@/components/ScrollyStory';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section - Curtain Reveal */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Horizontal Gallery Section */}
      <section id="gallery">
        <HorizontalGallery />
      </section>
      
      {/* Model Portfolio Section */}
      <section id="portfolio">
        <ModelPortfolio />
      </section>
      
      {/* Model Services Section */}
      <section id="services">
        <ModelServices />
      </section>
      
      {/* Model Testimonials Section */}
      <section id="testimonials">
        <ModelTestimonials />
      </section>
      
      {/* Model Gallery Section */}
      <section id="model-gallery">
        <ModelGallery />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
