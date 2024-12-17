import Button from "./Bouton"; // Import du composant Button

export function Footer() {
  return (
    <div>
      <footer>
        <p>Voici mon footer</p>
        <Button /> {/* Utilisation du bouton */}
      </footer>
    </div>
  );
}

export default Footer;
