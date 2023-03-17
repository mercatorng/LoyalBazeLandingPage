import { Navbar } from "./components";
import { FeaturesSection } from "./pages/Features_Section";
import { PriorityAccessSection } from "./pages/PriorityAccess_Section";
import {Footer} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <FeaturesSection/>
      <PriorityAccessSection />
      <Footer />
    </>
  );
}

export default App;
