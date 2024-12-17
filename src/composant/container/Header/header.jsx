import "react";
import reactLogo from "/src/assets/react.svg"; // chemin absolu basé sur la racine du projet
import viteLogo from "/vite.svg"; // Chemin pour le logo Vite

export function Header() {
  return (
    <header>
      <div>
        <img src={viteLogo} alt="Vite Logo" />
        <img src={reactLogo} alt="React Logo" />
      </div>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
