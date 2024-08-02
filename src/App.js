import logo from "./logo.svg";
import "./App.css";
import Navbar from "./core/components/layout/Navbar";
import Landing from "./core/components/layout/Landing";
import Footer from "./core/components/layout/Footer";
import MainRouter from "./route-routers";

function App() {
  const appName = "mindsprint";
  return (
    <div className="App">
      <Navbar appName="mindsprint" />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
