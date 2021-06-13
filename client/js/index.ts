import TemplateEngine from './templateEngine/TemplateEngine'
import '../css/main.styl'
import './declares/global'

class ChatApp {
    /**
     * todo *2
     * readonly
     * @type {{chatWindow: string, additionalOptionsHandler: string}}
     */
    readonly selectors = {
        chatWindow: 'chat-messages-window',
        additionalOptionsHandler: 'chat-messages-input__additional'
    }

    private readonly chatMessagesWindow: HTMLElement | null
    private chatItems: NodeListOf<Element>

    constructor() {

        ChatApp.initTemplateEngine()
        this.initForms()
        this.pixelateImages()

        if (window.isChatWindow !== undefined && window.isChatWindow) {
            this.chatItemsInit()

            this.chatMessagesWindow = document.getElementById(this.selectors.chatWindow)
            if (this.chatMessagesWindow !== null && !this.chatMessagesWindow.classList.contains(`.${this.selectors.chatWindow}--inactive`)) {
                this.searchButtonInit()
                this.chatPlusButtonInit()
            }
        }
    }

    private initForms(): void {
        const formElements: HTMLElement[] = [...document.forms]

        formElements.forEach((formElement) => {
            console.log('setting form event listener to:', formElement)
            new CustomForm(formElement as HTMLFormElement)
        })
    }

    private chatItemsInit = (): void => {
        this.chatItems = document.querySelectorAll('.chat-item')

        this.chatItems.forEach((chatItem) => {
            chatItem.addEventListener('click', () => {
                if (!chatItem.classList.contains('active')) {
                    this.chatItems.forEach((item) => item.classList.remove('active'))
                    chatItem.classList.add('active')
                }
            })
        })
    }

    private searchButtonInit(): void {
        const searchBtn = document.getElementById('chat-search-button')
        if (searchBtn == null) {
            return
        }

        searchBtn.addEventListener('click', (element: MouseEvent) => {
            console.log('search event dispatch by the button')
            const target: HTMLTextAreaElement | null = element.target as HTMLTextAreaElement

            if (target === null) {
                return
            }

            const form = target.closest('form')

            if (form === null) {
                return null
            }

            form.dispatchEvent(new Event('submit'))
        })
    }

    /**
     * All images on page with class 'pixelate' must be pixelized
     */
    private pixelateImages(): void {
        document.querySelectorAll('img.pixelate')
            .forEach((imageTag) => {
                console.log(imageTag)
                // todo: implements later
                // pixelate()
            })
    }

    private chatPlusButtonInit(): void {
        if (this.chatMessagesWindow === null) {
            return
        }

        const additionalOptionsHandler = this
            .chatMessagesWindow
            .querySelector(`.${this.selectors.additionalOptionsHandler}`)

        if (additionalOptionsHandler === null) {
            return
        }

        additionalOptionsHandler.addEventListener('click', (event) => {
            if (event.target === null) {
                return
            }

            const targetArea: HTMLTextAreaElement = event.target as HTMLTextAreaElement

            const chatWindow = targetArea.closest(`.${this.selectors.chatWindow}`)

            if (chatWindow === null) {
                return
            }

            chatWindow.classList.toggle(`${this.selectors.chatWindow}--with-additional-options`)
        })
    }

    private static initTemplateEngine(): void {
        new TemplateEngine()
    }
}

class CustomForm {
    private readonly domFormElement: HTMLFormElement

    constructor(domFormElement: HTMLFormElement) {
        this.domFormElement = domFormElement
        this.setListeners()
    }

    private setListeners = (): void => {
        this.domFormElement.addEventListener('submit', (event) => {
            event.preventDefault()
            console.log(this.aggregateFormData())
        })
    }

    private aggregateFormData = (): {[keyof: string]: string} => {
        const formData = new FormData(this.domFormElement)

        return Array.from(formData.entries()).reduce((acc, [key, val]) => ({[key]: val, ...acc}), {})
    }
}

new ChatApp()
