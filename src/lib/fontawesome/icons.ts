import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


library.add(faGoogle, faCircleRight);

export const faGoogleIcon = icon({ prefix: "fab", iconName: faGoogle.iconName });
export const faCircleRightIcon = icon({prefix: "fas", iconName: faCircleRight.iconName})
