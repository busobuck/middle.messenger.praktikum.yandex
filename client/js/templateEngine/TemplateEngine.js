import Handlebars from 'handlebars'
import spectrumLogo from '../../img/png/spectrumLogo.png'

import mainStyle from '../../css/main.styl'
import fontsStyle from '../../css/fonts.styl'
import varsStyle from '../../css/vars.styl'
import chatStyle from '../../css/chat.styl'
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
        document.getElementById('root').innerHTML = template({...TemplateAssets.getCommonAssets})
    }

    get template() {
        switch (window.templateName) {
            case "index":
                return indexTemplate
            case "register":
                return registerTemplate
            case "settings":
                return settingsTemplate
            case "chatInactive":
                return chatInactiveTemplate
            case "chatActive":
                return chatActiveTemplate
            case "404":
                return notFoundTemplate
            case "500":
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

    static styleAssets = {
        styles: [
            mainStyle, fontsStyle, varsStyle, chatStyle
        ]
    }

    static getCommonAssets = {
        ...TemplateAssets.commonImagesAssets
    }
}
