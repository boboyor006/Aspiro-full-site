import React from 'react'
import Aspiro from "./img/aspiro.jpg"
import "./css/order.css"
import Teachers from "./img/s1.jpg"
import S2 from "./img/s2.jpg"
import S3 from "./img/s3.jpg"
import S4 from "./img/s4.jpg"
import ReactPlayer from 'react-player';
import teachersss from "../pages/Sifirs/teacher.jpg"





const order = () => {
  return (
    <div className='contenr'>
      <div className="text_center">
        <div className="center_img">
          <img src={Aspiro} alt="" />
        </div>
        <div className="center_text">
          <h3 className='text'>Bizning ASPIRO o'quv markazi abituriyent va mustaqil o'rganuvchilarga shaxsiy muvaffaqiyatlarini rivojlantirish va qobiliyatlarini kashf etish uchun iqtidorli muhit tashkil etuvchi ta'lim muassasasidir.
        Biz, abituriyent va mustaqil o'rganuvchilarni qo'llab-quvvatlash, o'rganish tajribasini taqdim etish va ularning potensialini yuqori darajaga olib chiqish uchun turli dasturlarni taklif etamiz. ASPIRO o'quv markazi ta'lim muassasasi sifatida, tajribali va istiqbolli o'qituvchilardan iborat jamoadan tashkil topgan. Abituriyent va mustaqil o'rganuvchilarga shaxsiy darslar, guruh darslari va yangicha yondoshuv kabi turli ta'lim usullariga e'tibor qaratamiz. Ta'lim dasturlarimiz abituriyent va mustaqil o'rganuvchilarning talablari va maqsadlariga mos ravishda individual tarzda moslashtirilishi mumkin. Shuningdek, imtihonlarga tayyorlanish dasturlari, tillar kurslari va IT sohasida kuchaytirilgan darslar kabi maxsus dasturlarni sizlarga taklif etamiz.

</h3>
        </div>
      </div>
      
      
      <div className="teachers">
          <div className="img_teacher">
          <img src={Teachers} alt="" />
          <div className="img1">
          <img src={S4} alt="" />
          </div>
          <div className="img2">
          <img src={S3} alt="" />
          </div>
          <div className="img3">
          <img src={S2} alt="" />
          </div>
          </div>
      </div>

<br />
      <div className=''>
            <h2>Markazimizda har ikki haftada bir marta (yakshanba kuni) BMBA namunasidagi 5 blokli testlar o'tkaziladi</h2>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=9MvROzJ__0s"
                controls={true}
                width="100%"
            />
            
        </div>
        <br />
      <div className=''>
            <h2>O'quv markazimizning manzili </h2>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=4iVm4OZuLPo"
                controls={true}
                width="100%"
            />
        </div>

        <br />
       <div className="Liders">
        <div className="imgss">
          <img src={teachersss} alt="" />
        </div>
        <div className="liders_text">
          <h3>        ASPIRO o'quv markazi 2021-yil 1-fevral sanasida tashkil etilgan. Bunga qadar ham jamoamiz boshqa nom va formatda qariyb 6 yil faoliyat olib borgan. Markaz rahbari Berdinazarov Jahongir Nuraliyevich 16 yillik ish tajribasiga ega oliy toifali o'qituvchi hisoblanadi. Bunda tashqari markazimizning barcha o'qituvchilari o'z mutaxassisliklari bo'yicha yuqori darajali sertifikatlarga ega.       
          </h3>
         </div>
       </div>
       
    </div>
  )
}

export default order