import "./App.css";
import AppHeader from "./Component/AppHeader";
import AppIntro from "./Component/AppIntro";
import PricingPlans from "./Component/PricingPlans";

function App() {
  return (
    <div>
      <AppHeader />
      <AppIntro />
      <PricingPlans />
    </div>
  );
}

export default App;
