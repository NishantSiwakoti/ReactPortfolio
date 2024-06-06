import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { AllRoutes } from "./Routes/AllRoutes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
