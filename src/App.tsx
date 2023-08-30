import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import TopNfts from "./components/TopNfts/TopNfts";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main >
        {/* <Hero/> */}
        <Features />
        <TopNfts />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
