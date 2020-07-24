import '@polymer/polymer/lib/elements/custom-style';
import { styleTemplate } from './document-styles-css.js';


const cs = document.createElement("custom-style");
cs.setAttribute("id", "document-styles");
cs.appendChild(styleTemplate.content);
document.head.appendChild(cs);
