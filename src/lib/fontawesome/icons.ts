import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


library.add(faGoogle);

export const faGoogleIcon = icon({ prefix: "fab", iconName: faGoogle.iconName });
