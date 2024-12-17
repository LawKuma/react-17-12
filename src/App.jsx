import "./App.css";
import Footer from "./composant/container/Footer/footer";
import Header from "./composant/container/Header/header";

function App() {
  return (
    <div>
      <Header />
      <h1>Bienvenue sur mon application React</h1>
      <p>Ceci est le contenu principal de l&apos;application.</p>
      <Footer />
    </div>
  );
}

export default App;
