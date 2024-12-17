export function Button() {
  const handleClick = () => {
    alert("Bouton cliqué!");
  };

  return <button onClick={handleClick}>Cliquer ici</button>;
}

export default Button;
