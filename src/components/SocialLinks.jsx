import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <a href="https://google.com" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-indigo-600 text-2xl hover:text-indigo-700 cursor-pointer"
        />
      </a>
      <a href="https://google.com" target="_blank">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-indigo-600 text-2xl hover:text-indigo-700 cursor-pointer"
        />
      </a>
      <a href="https://google.com" target="_blank">
        <FontAwesomeIcon
          icon={faTelegram}
          className="text-indigo-600 text-2xl hover:text-indigo-700 cursor-pointer"
        />
      </a>
    </div>
  );
};
