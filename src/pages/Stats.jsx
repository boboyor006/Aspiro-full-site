import React from 'react'
// import RevenueList from '../components/revenue-list/RevenueList';
// import Charts from './Charts';
import "./css/stats.css"

import S5 from "../pages/img/s5.jpg"
import S6 from "../pages/img/s6.jpg"
import S7 from "../pages/img/s7.jpg"
import S8 from "../pages/img/s8.jpg"
import B1 from "../pages/Sifirs/B1.jpg"
import B2 from "../pages/Sifirs/B2.jpg"
import B3 from "../pages/Sifirs/B3.jpg"
import B4 from "../pages/Sifirs/B4.jpg"
import B5 from "../pages/Sifirs/B5.jpg"
import B6 from "../pages/Sifirs/B6.jpg"
import B7 from "../pages/Sifirs/B7.jpg"
import B8 from "../pages/Sifirs/B8.jpg"



function Stats() {
    const cards1 =  {
      name:"Behruz ",
      firstname: "O'tganov  ",
      book:1000726,
      titul:16811,
      blols:"blok1:(7) blok2(4) blok3(4) blok4(28) blok5(30)",
      bal: 166.3
    }
    const cards2 =  {
      name:"Sardor ",
      firstname: "Qohhorov ",
      book:1000725,
      titul:16810,
      blols:"blok1:(8) blok2(2) blok3(6) blok4(26) blok5(30)",
      bal: 161.2
    }
    const cards3 =  {
      name:"Jasmina   ",
      firstname: "Izzatullayeva",
      book:1000678,
      titul:16878,
      blols:"blok1:(10) blok2(5) blok3(5) blok4(30) blok5(21)",
      bal: 159.1
    }


    


  return (
    <div className='statk'>
        <h2>HAFTA G'OLIBLARI</h2> 
          <div className="natija">
          <div className="peopel1">
                    1-o'rin 
          <h4>Ism: {cards1.name}</h4>
          <br />
          <h4>Familya: {cards1.firstname}</h4>
          <br />
          <h4>kitob raqami: {cards1.book}</h4>
          <br />
          <h4>titul raqami: {cards1.titul}</h4>
          <br />
          <br />
          <h4>bloklari: {cards1.blols}</h4>
          <br />
          <h4>Ummumiy ballar: {cards1.bal}</h4>
        </div>




        <div className="peopel1">
          2-o'rin 
          <h4>Ism: {cards2.name}</h4>
          <br />
          <h4>Familya: {cards2.firstname}</h4>
          <br />
          <h4>kitob raqami: {cards2.book}</h4>
          <br />
          <h4>titul raqami: {cards2.titul}</h4>
          <br />
          <br />
          <h4>bloklari: {cards2.blols}</h4>
          <br />
          <h4>Ummumiy ballar: {cards2.bal}</h4>





        </div>     <div className="peopel1">
          3-o'rin 
          <h4>Ism: {cards3.name}</h4>
          <br />
          <h4>Familya: {cards3.firstname}</h4>
          <br />
          <h4>kitob raqami: {cards3.book}</h4>
          <br />
          <h4>titul raqami: {cards3.titul}</h4>
          <br />
          <br />
          <h4>bloklari: {cards3.blols}</h4>
          <br />
          <h4>Ummumiy ballar: {cards3.bal}</h4>
        </div>
   
          </div>
        <br />
        <br />
        

      <div className="cards_img">
          <img src={S5} alt="" />
          <img src={S6} alt="" />
          <img src={S7} alt="" />
          <img src={S8} alt="" />
      </div>
      <br />
      <br />
        <h3>Bizning o'quvchilarimiz olgan natijalari </h3>
    <br />
      <div className="sifir">
        <img src={B1} alt="" />
        <img src={B2} alt="" />
        <img src={B3} alt="" />
        <img src={B4} alt="" />
        <img src={B5} alt="" />
        <img src={B6} alt="" />
        <img src={B7} alt="" />
        <img src={B8} alt="" />
      </div>

    </div>
  )
}

export default Stats;