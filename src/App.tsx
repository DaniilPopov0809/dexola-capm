// import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="container">
        <Features/>
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
