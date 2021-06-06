import userAvatar from '../../../img/png/userAvatar.png'
import zoomIcon from '../../../img/png/zoomIcon.png'

export const chatInactiveTemplate = `<main>
    <div class="chat">
        <div class="chat__top-line">
            <div>128 +2A</div>
            <div>
                <img src="{{ spectrumLogo }}" alt="Spectrum Logo">
            </div>
        </div>
        <div class="chat__wrapper">
            <div class="chat-left">
                <div class="chat-left__search chat-search">
                    <form action="#">
                        <input type="text" name="searchString" placeholder="search...">
                        <div class="chat-search__zoom" id="chat-search-button"><img src="${zoomIcon}" alt="Zoom Icon"></div>
                    </form>
                </div>
                <ul class="chat-left__chats-list">
                    <li class="chat-item">
                        <div class="chat-item__avatar">
                            <img src="${userAvatar}" alt="Dummy User Avatar">
                        </div>
                        <div class="chat-item__username">
                            Имя пользователя
                        </div>
                    </li>
                    <li class="chat-item">
                        <div class="chat-item__avatar">
                            <img src="${userAvatar}" alt="Dummy User Avatar">
                        </div>
                        <div class="chat-item__username">
                            Dummy username
                        </div>
                    </li>
                    <li class="chat-item">
                        <div class="chat-item__avatar">
                            <img src="${userAvatar}" alt="Dummy User Avatar">
                        </div>
                        <div class="chat-item__username">
                            Short name
                        </div>
                    </li>
                    <li class="chat-item">
                        <div class="chat-item__avatar">
                            <img src="${userAvatar}" alt="Dummy User Avatar">
                        </div>
                        <div class="chat-item__username">
                            Имя пользователя
                        </div>
                    </li>
                    <li class="chat-item">
                        <div class="chat-item__avatar">
                            <img src="${userAvatar}" alt="Dummy User Avatar">
                        </div>
                        <div class="chat-item__username">
                            Имя пользователя
                        </div>
                    </li>
                </ul>
                <div class="chat-settings-button">
                    <a class="chat-settings-button__content" href="/settings.html">
                        App Settings
                    </a>
                </div>
            </div>
            <div class="chat-messages-window chat-messages-window--inactive">
                <div class="chat-messages-window__content">
                    Select a chat to send a message
                </div>
            </div>
        </div>
    </div>
</main>
<footer>
    <p>© 1982, 1986, 1987 Amstrad Plc.<br>
        Drive M: available.</p>
</footer>`
