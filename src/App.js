import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FreeProducts from "./components/FreeProducts/FreeProducts";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Results/Results";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Results />
      </header>
      <main>
        <div className="features">
          <Features />
        </div>
        <FreeProducts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
