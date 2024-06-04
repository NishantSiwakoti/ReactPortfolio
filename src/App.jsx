import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { AllRoutes } from "./Routes/AllRoutes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
