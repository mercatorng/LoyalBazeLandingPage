import { Navbar, Hero, SuccessMessage, Features, Access } from "./components";
import { FeaturesSection } from "./pages/Features_Section";
import { PriorityAccessSection } from "./pages/PriorityAccess_Section";
import { Footer } from "./components";

function App() {
  return (
    <section>
      <SuccessMessage />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PriorityAccessSection />
      <Footer />
    </section>
  );
}

export default App;
