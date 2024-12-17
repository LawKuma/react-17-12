import "./App.css";
import Footer from "./composant/container/Footer/footer";
import Header from "./composant/container/Header/header";
import { User } from "./composant/User/User";

function App() {
  return (
    <div>
      <Header />
      <h1>Profil de l&apos;utilisateur</h1>
      <User/>
      <Footer />
    </div>
  );
}

export default App;
