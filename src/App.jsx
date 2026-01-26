import React, { useState } from "react";
import Navbar from "./Components/navbar";
import Card from "./Components/Card";

function App(){

  const data=[

    {image:"https://pixelframe.design/wp-content/uploads/2024/11/Lady-Gaga-and-Bruno-Mars_Die-with-a-Smile_Cover-art-large.jpg",name:"Die With Smile",artist:"Lady Gaga and Bruno Mars",add:false},

    {image:"https://c.saavncdn.com/461/Tum-Tak-Hindi-2013-20200704132036-500x500.jpg",name:"Tum Tak",artist:"A.R.Rahman",add:false},

    {image:"https://c.saavncdn.com/210/Awara-From-Dabangg-3--Hindi-2019-20191112103325-500x500.jpg",name:"Awara",artist:"Sajid-Wajid",add:false},

    {image:"https://i.scdn.co/image/ab67616d0000b27316168e9d75e544b005bc0a0a",name:"Co2",artist:"Prateek Khuhade",add:false},

    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHqA2fFP9IjjkVd6FYmtsFzspLK5ERaNSPQ&s",name:"Ik Kudi",artist:"Arpit Bala",add:false},

    {image:"https://i1.sndcdn.com/artworks-ZGzxGZjCvoHnL6Tp-wpNgng-t1080x1080.jpg",name:"Levitating",artist:"Dua Lipa",add:false},

    {image:"https://i.scdn.co/image/ab67616d00001e028265a736a1eb838ad5a0b921",name:"Sweather Weather",artist:" The Neighbourhood",add:false},

    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Rf-rHcDHFr3wF9tlM1wB9oaBh6FAbKz83w&s",name:"Ordinary",artist:"Alex Warren",add:false},

    {image:"https://i.scdn.co/image/ab67616d0000b2732e40b72ccc3db7bff6ddd966",name:"Shikayat",artist:"AUR",add:false},

    {image:"https://i.scdn.co/image/ab67616d0000b2730b1b3369020e7cccc766a77e",name:"Dum-a-Dum",artist:"Devu Khan",add:false},
    
  ]
  
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
    <div className="w-full h-screen bg-[#121212] py-7">
      <Navbar data={songData}/>
      <div className="flex flex-wrap ml-30 my-10 gap-10">
        {
          songData.map((obj , index)=>(
          <Card data={obj} handleclick={handleclick} index={index} key={index}/>
        ))}
      </div>
      
    </div>
  )
}

export default App;