import Handlebars from 'handlebars'
import spectrumLogo from '../../img/png/spectrumLogo.png'
import {indexTemplate} from "./templates/indexTemplate";
import {registerTemplate} from "./templates/registerTemplate";
import {settingsTemplate} from "./templates/settingsTemplate";
import {notFoundTemplate} from "./templates/notFoundTemplate";
import {errorTemplate} from "./templates/errorTemplate";
import {chatInactiveTemplate} from "./templates/chatInactiveTemplate";
import {chatActiveTemplate} from "./templates/chatActiveTemplate";

export default class TemplateEngine {
    constructor() {
        const template = Handlebars.compile(this.template)


        document.getElementById('root').innerHTML = template({
            ...TemplateAssets.commonImagesAssets,
        })

        // document.get.innerHTML = template({...TemplateAssets.getCommonAssets})
    }

    get template() {
        switch (location.pathname) {
            case "/index.html":
                return indexTemplate
            case "/register.html":
                return registerTemplate
            case "/settings.html":
                return settingsTemplate
            case "/chatInactive.html":
                return chatInactiveTemplate
            case "/chatActive.html":
                return chatActiveTemplate
            case "/404.html":
                return notFoundTemplate
            case "/500.html":
                return errorTemplate
            default:
                throw new Error('Wrong template name')
        }
    }
}

class TemplateAssets {
    static commonImagesAssets = {
        spectrumLogo: spectrumLogo
    }
}
