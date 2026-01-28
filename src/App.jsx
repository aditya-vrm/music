import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import Card from "./Components/Card";

import die from "./assets/images/die-with-smile.jpg";
import tum from "./assets/images/Tum Tak.jpg";
import awara from "./assets/images/Awara.jpg";
import co2 from "./assets/images/CO2.jpg";
import ikkudi from "./assets/images/Ik Kudi.jpg";
import levitating from "./assets/images/levitating.jpg";
import sweater from "./assets/images/Sweater Weather.jpg";
import ordinary from "./assets/images/Ordinary.jpg";
import Shikayat from "./assets/images/Shikayat.jpg";
import dum from "./assets/images/Dum-a-Dum.jpg";
import perfect from "./assets/images/Perfect.jpg";
import blinding from "./assets/images/Blinding Lights.jpg";
import heat from "./assets/images/Heat Waves.jpg"; 
import believer from "./assets/images/Believer.jpg";
import kesariya from "./assets/images/Kesariya.jpg";
import pasoori from "./assets/images/Pasoori.jpg";
import night from "./assets/images/Night Changes.jpg";
import counting from "./assets/images/Counting Stars.jpg";
import closer from "./assets/images/Closer.jpg";
import senorita from "./assets/images/Senorita.jpg";
import apna from "./assets/images/Apna Bana Le.jpg";
import until from "./assets/images/Until I Found You.jpg";
import lett from "./assets/images/Let Me Down Slowly.jpg";
import tera from "./assets/images/Tera Yaar Hoon Main.jpg";
import photograph from "./assets/images/Photograph.jpg";
import shivers from "./assets/images/Shivers.jpg";
import asit from "./assets/images/As It Was.jpg";
import ratt from "./assets/images/Raatan Lambiyan.jpg";
import stay from "./assets/images/Stay.jpg";
import something from "./assets/images/Something Just Like This.jpg";


function App(){

 const data = [

  { image: die, name:"Die With Smile", artist:"Lady Gaga & Bruno Mars", add:false },

  { image:tum, name:"Tum Tak", artist:"A. R. Rahman", add:false },

  { image:awara, name:"Awara", artist:"Sajid–Wajid", add:false },

  { image:co2, name:"CO2", artist:"Prateek Kuhad", add:false },

  { image:ikkudi, name:"Ik Kudi", artist:"Arpit Bala", add:false },

  { image:levitating, name:"Levitating", artist:"Dua Lipa", add:false },

  { image:sweater, name:"Sweater Weather", artist:"The Neighbourhood", add:false },

  { image:ordinary, name:"Ordinary", artist:"Alex Warren", add:false },

  { image:Shikayat, name:"Shikayat", artist:"AUR", add:false },

  { image:dum, name:"Dum-a-Dum", artist:"Devu Khan", add:false },

  { image:perfect, name:"Perfect", artist:"Ed Sheeran", add:false },

  { image:blinding, name:"Blinding Lights", artist:"The Weeknd", add:false },

  { image:heat, name:"Heat Waves", artist:"Glass Animals", add:false },

  { image:believer, name:"Believer", artist:"Imagine Dragons", add:false },

  { image:kesariya, name:"Kesariya", artist:"Arijit Singh", add:false },

  { image:pasoori, name:"Pasoori", artist:"Ali Sethi", add:false },

  { image:night, name:"Night Changes", artist:"One Direction", add:false },

  { image:counting, name:"Counting Stars", artist:"OneRepublic", add:false },

  { image:closer, name:"Closer", artist:"The Chainsmokers", add:false },

  { image:senorita, name:"Senorita", artist:"Shawn Mendes", add:false },

  { image:apna, name:"Apna Bana Le", artist:"Arijit Singh", add:false },

  { image: until, name:"Until I Found You", artist:"Stephen Sanchez", add:false },

  { image: lett, name:"Let Me Down Slowly", artist:"Alec Benjamin", add:false },

  { image: tera, name:"Tera Yaar Hoon Main", artist:"Arijit Singh", add:false },

  { image: photograph, name:"Photograph", artist:"Ed Sheeran", add:false },

  { image: shivers, name:"Shivers", artist:"Ed Sheeran", add:false },

  { image: asit, name:"As It Was", artist:"Harry Styles", add:false },

  { image: ratt, name:"Raatan Lambiyan", artist:"Jubin Nautiyal", add:false },

  { image: stay, name:"Stay", artist:"Justin Bieber", add:false },

  { image: something, name:"Something Just Like This", artist:"Coldplay", add:false }

];

  
   const [songData , SetsongData] = useState(data);
   const handleclick=((index)=>{
    SetsongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex===index){
          return{...item,add:!item.add}
        }
        return item;
      })
    })
   })

  return(
    <div className="w-full  bg-[#121212] py-7">
      <Navbar data={songData}/>
      <div className="flex flex-wrap ml-10 my-10 gap-10">
        {
          songData.map((obj , index)=>(
          <Card data={obj} handleclick={handleclick} index={index} key={index}/>
        ))}
      </div>
      
    </div>
  )
}

export default App;
