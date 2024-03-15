import React from 'react'
import "./css/Blank.css"
import Avat1 from "./img/avat1.jpg"
import Avat2 from "./img/avat2.jpg"
import Avat3 from "./img/avat3.jpg"
import Avat4 from "./img/avat4.jpg"
import Avat5 from "./img/avat5.jpg"
import Avat6 from "./img/avat6.jpg"
import Avat7 from "./img/avat7.jpg"


const Blank = () => {
    return (
        <div className='Blank '>
            <div className="Blank_text">


            <div className="B_img">
                    <img src={Avat1} alt="" />
                </div>


                <div className="B_text">
                    <h3>ASPIRO o'quv markazi farzandining taqdiriga befarq bo'lmagan hurmatli ota - onalarimiz uchun ajoyib imkoniyat taqdim etmoqda. Aziz bolajonlarimiz uchun PREZIDENT MAKTABLARiga tayyorlov uchun 📗Ingliz tili 🧮 Maxsus matematika to'garaklari tashkil etildi. 📌 Darslarni sifat sinovidan o'tgan o'qituvchilar olib borishini ta'kidlab o'tamiz. ✍️Shoshiling! Farzandingiz bo'sh vaqtidan unumli foydalanishi uchun ajoyib imkoniyatdan foydalanib qoling. Qabul boshlandi. Murojaat uchun: 📱: +998-99-713-10-20</h3>
                </div>
            </div>


            <div className="Carusels">
                <div className="caruselss">
                    <img src={Avat2} alt="" />
                </div>

                <div className="caruselss">
                 <img src={Avat3} alt="" />
                </div>

                <div className="caruselss">
                <img src={Avat4} alt="" />
                </div>

                <div className="caruselss">
                <img src={Avat5} alt="" />
                </div>

                <div className="caruselss">
                <img src={Avat6} alt="" />
                </div>

                <div className="caruselss">
                <img src={Avat7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blank
