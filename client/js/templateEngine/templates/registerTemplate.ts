export const registerTemplate = `<main>
        <div class="chat">
            <div class="chat__top-line">
                <div>128 +2A</div>
                <div>
                    <img src="{{ spectrumLogo }}" alt="Spectrum Logo">
                </div>
            </div>
            <div class="chat__content">
                <form action="#">
                    <label>
                        <input type="text" placeholder="Email" name="email">
                    </label>
                    <label>
                        <input type="text" placeholder="Login" name="login">
                    </label>
                    <label>
                        <input type="text" placeholder="Name" name="name">
                    </label>
                    <label>
                        <input type="text" placeholder="Surname" name="surname">
                    </label>
                    <label>
                        <input type="text" placeholder="Phone" name="phone">
                    </label>
                    <label>
                        <input type="password" placeholder="Password" name="password">
                    </label>
                    <label>
                        <input type="password" placeholder="Repeat password" name="repeatPassword">
                    </label>
                    <input type="submit" value="Register">
                    <a class="black button" href="/index.html">Back to login</a>
                </form>
            </div>
        </div>
    </main>
    <footer>
        <p>© 1982, 1986, 1987 Amstrad Plc.<br>
            Drive M: available.</p>
    </footer>`
