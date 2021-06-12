import dummyCurrentUserAvatar from './../../../img/png/dummyCurrentUserAvatar.png'

export const settingsTemplate = `<main>
    <div class="chat">
        <div class="chat__top-line">
            <div>128 +2A</div>
            <div>
                <img src="{{ spectrumLogo }}" alt="Spectrum Logo">
            </div>
        </div>
        <div class="chat__content">
            <div class="current-user-avatar">
                <div class="current-user-avatar__container m-shadow">
                    <img src="${dummyCurrentUserAvatar}" alt="Current user avatar">
                </div>
            </div>
            <form action="#">
                <input type="text" placeholder="EMail" name="email">
                <input type="text" placeholder="Login" name="login">
                <input type="text" placeholder="Name" name="name">
                <input type="text" placeholder="Surname" name="surname">
                <input type="text" placeholder="Phone" name="Phone">
                <input type="submit" value="Save">
                <a class="black button" href="#">Change password</a>
                <a class="black button" href="/chatActive.html">Close settings</a>
            </form>
        </div>
    </div>
</main>
<footer>
    <p>© 1982, 1986, 1987 Amstrad Plc.<br>
        Drive M: available.</p>
</footer>`
