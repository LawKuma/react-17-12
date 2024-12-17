 export function Hobbies() {
    const hobbies = ["Football", "Voyage", "Lecture"];
    
    return (
      <div>
        <h3>Passions :</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  