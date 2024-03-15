import React from 'react'
import Aspiro from "./img/aspiro.jpg"
import "./css/order.css"
import Teachers from "./img/s1.jpg"
import S2 from "./img/s2.jpg"
import S3 from "./img/s3.jpg"
import S4 from "./img/s4.jpg"





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

    </div>
  )
}

export default order