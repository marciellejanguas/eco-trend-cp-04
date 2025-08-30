import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <FontAwesomeIcon icon={faCircleCheck} />
      <h1>Adicionado</h1>
    </div>
  );
}
