import { BrowserRouter, Routes, Route } from "react-router-dom";



import Page from "./app/about/page";
import Page1 from "./app/portfolio/page";
import Page2 from "./app/services/page";
import Page4 from "./app/contact/page";
import Navbar from "./app/components/navbar/Navbar";
import Footer from "./app/components/footer/Footer";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="about" element={<Page/>}/>
        <Route path="portfolio" element={<Page1/>}/>
        <Route path="services" element={<Page2/>}/>
        <Route path="contact" element={<Page4/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;