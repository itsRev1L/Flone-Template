import "./App.css";
import Navbar from "./Component/Navbar/Navbar.jsx";
import ImgSlider from "./Component/ImgSlider/ImgSlider.jsx";
import Pros from "./Component/Pros/Pros.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Items from "./Component/Cards/Items.jsx";
function App() {
  return (
    <>
      <Navbar />
      <ImgSlider />
      <Pros />
      <Items />
      <Footer />
    </>
  );
}

export default App;
