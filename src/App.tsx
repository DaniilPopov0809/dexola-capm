import RegistrationForm from "./components/RegistrationForm/RegistrationFormForm"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
    <Header />
    <div className="container">
    <RegistrationForm/>
    </div>
    <Footer/>
    </>
  )
}

export default App
