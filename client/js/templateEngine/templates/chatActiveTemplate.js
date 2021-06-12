import userAvatar from '../../../img/png/userAvatar.png'
import zoomIcon from '../../../img/png/zoomIcon.png'
import plus from '../../../img/svg/plus.svg'
import minus from '../../../img/svg/minus.svg'

export const chatActiveTemplate = `<main>
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
                        <div class="chat-search__zoom" id="chat-search-button"><img src="${zoomIcon}"
                                                                                    alt="Zoom Icon"></div>
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
                    <li class="chat-item active">
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
                            Short name
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
            <div class="chat-messages-window" id="chat-messages-window">
                <div class="chat-messages-window__content">
                    <div class="chat-message chat-message--interlocutor">
                        <div class="chat-message__message">
                            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
                            момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                            знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все
                            еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с
                            пленкой.

                            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                            никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на
                            аукционе за 45000 евро.
                        </div>
                        <div class="chat-message__message-time">
                            11:56
                        </div>
                    </div>
                    <div class="chat-message chat-message--interlocutor">
                        <div class="chat-message__message">
                            <img src="/img/png/pixelateCameraDummy.png" alt="Dummy user image">
                        </div>
                        <div class="chat-message__message-time">
                            11:56
                        </div>
                    </div>
                    <div class="chat-message chat-message--currentUser">
                        <div class="chat-message__message">
                            Круто
                        </div>
                        <div class="chat-message__message-time">
                            <!-- here "++" means the message has been read-->
                            <!-- "+" means the message has been delivered-->
                            <!-- "" means the message has no status yet (some delay before get status) -->
                            <span>++</span> 12:00
                        </div>
                    </div>
                </div>
                <div class="chat-additional-functions">
                    <div class="chat-additional-functions__left">
                        <span class="chat-additional-functions__label">
                            Choose:
                        </span>
                        <ul class="chat-additional-functions__variants">
                            <li>
                                <button data-type="media" class="plain white">
                                    <span>Photo or video</span>
                                </button>
                            </li>
                            <li>
                                <button data-type="file" class="plain white">
                                    <span>File</span>
                                </button>
                            </li>
                            <li>
                                <button data-type="location" class="plain white">
                                    <span>Location</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="chat-additional-functions__right">
                        <ul class="chat-additional-functions__variants">
                            <li>
                                <button data-type="media" class="plain red">
                                    <span>Delete chat</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-messages-input">
                    <div class="chat-messages-input__input">
                        <!-- todo: change "root" for real username  -->
                        <span>~root#</span>
                        <!-- todo: changing text below without class "input" realization  -->
                        <span>some user text</span>
                        <span class="console-caret"> </span>
                    </div>
                    <div class="chat-messages-input__additional">
                        <img src="${plus}" alt="plus" class="plus">
                        <img src="${minus}" alt="minus" class="minus">
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<footer>
    <p>© 1982, 1986, 1987 Amstrad Plc.<br>
        Drive M: available.</p>
</footer>`
