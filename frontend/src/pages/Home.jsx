import Hero from '../components/home/Hero';
import Channels from '../components/home/Channels';
import HowItWorks from '../components/home/HowItWorks';
import FeaturesHome from '../components/home/FeaturesHome';
import PricingPreview from '../components/home/PricingPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Channels />
      <HowItWorks />
      <FeaturesHome />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}