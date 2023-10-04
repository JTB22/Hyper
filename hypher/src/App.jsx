import Lorem from "./components/lorem";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Lorem runs={1} lorem={false} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
