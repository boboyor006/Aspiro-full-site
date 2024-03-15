import React from 'react'
import "./css/setting.css"
import Rasim from "./img/img10.png"


const Settings = () => {
  return (
    <div className='Cantac'>
        <div className="Contact_text">
            <div className="Con_img">
                <img src={Rasim} alt="" />
            </div>

            <div className="Con_text">
                <div className="icons">
                    <div className="input-container">
                        <input placeholder="Ismiz" className="input-field" type="text"/>
                        <label for="input-field" className="input-label">Ismiz </label>
                        <span span className="input-highlight"></span>
                    </div>
                    <div className="input-container">
                        <input placeholder="Familya" className="input-field" type="text"/>
                        <label for="input-field" className="input-label">Familya</label>
                        <span span className="input-highlight"></span>
                    </div>
                    <div className="input-container">
                        <input placeholder="Emailniz kiriting" className="input-field" type="emaile"/>
                        <label for="input-field" className="input-label">Email kiriting </label>
                        <span span className="input-highlight"></span>
                    </div>
                    <div className="input-container">
                        <input placeholder="Parolingiz" className="input-field" type="password"/>
                        <label for="input-field" className="input-label">Parolizni yozing  </label>
                        <span span className="input-highlight"></span>
                    </div>
                    <button className="Btn"></button>
                </div>
            </div>
        </div>

        <div className="Cont_text">
           <div className="Animaton_text">
             <div class="cardss">
                 <div class="backgroundss">
                    </div>
                    <div className="logoss">
                         Linklarimiz 
                    </div>

                <a href="https://www.instagram.com/aspiro_educational_center/"><div className="boxss box11"><span className="iconss"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg></span></div></a>

                <a href="https://t.me/aspiroworld"><div className="boxss box22"> <span className="iconss"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                </svg></span></div></a>

                <a href="https://www.youtube.com/channel/UCBIkrg7plWVPBx9Eetq9_kw"><div className="boxss box33"><span className="iconss"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg></span></div></a>

                    <div className="boxss box44"></div>
            </div>
            </div>

        <div className="Cant_text">
        <div className="item-hints">
            <div className="hint" data-position="4">
                <span className="hint-radius"></span>
                    <span className="hint-dot">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819M12 4c3.309 0 6 2.691 6 6.004c.021 4.438-4.388 8.423-6 9.731c-1.611-1.308-6.021-5.293-6-9.735c0-3.309 2.691-6 6-6"/><path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"/></svg>
                    </span>
                        <div className="hint-content do--split-children">
                            <p>Afrosiyob milliy bog'i "Chag'aniyon" kitob markazi 3-qavat</p>
                </div>
            </div>
        </div>
        <div className="item-hintss">
            <div className="hints" data-position="4">
                <span className="hint-radiuss"></span>
                    <span className="hint-dotss">
                        <i className='bx bx-message'></i>
                        </span>
                        <div className="hint-contents do--split-childrens">
                            <p>polatovt033@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="item-hintss">
            <div className="hints" data-position="4">
                <span className="hint-radiuss"></span>
                    <span className="hint-dotss">
                        
                        <i className='bx bx-mobile'></i>
                        </span>
                        <div className="hint-contents do--split-childrens">
                            <p>+998 99 713 10 20</p>
                                    Adminstrator
                </div>
            </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Settings;