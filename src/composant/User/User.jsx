import { FullName } from "./FullName/FullName";
import { Hobbies } from "./Hobbies/Hobbies";

export function User() {
    return (
      <div>
        <FullName />
        <Hobbies/>
      </div>
    );
  }
  