import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Shop/>
      <Products/>
      <About/>
    </div>
  );
}

export default App;
