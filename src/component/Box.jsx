import React, { useState } from "react";
import image from "../assets/main.jpg";

const Box = () => {
  const [info, setInfo] = useState([
    {
      id: 1,  
      image: image,
      title: "Best of Paris in 7 Days Tour",
      description: `Paris is synonymous with the finest things that culture can offer
          — in art, fashion, food, literature, and ideas. On this tour, your
            Paris-savvy Rick Steves guide will immerse you in the very best of
            the City of Light: the masterpiece-packed Louvre and Orsay
            museums, resilient Notre-Dame Cathedral, exquisite
            Sainte-Chapelle, and extravagant Palace of Versailles. You'll also
            enjoy guided neighborhood walks through the city's historic heart
            as well as quieter moments to slow down and savor the city's
            intimate cafés, colorful markets, and joie de vivre. Join us for
            the Best of Paris in 7 Days`,
      price: "4,532 $",
      isShortned: true,
      showData: true,
    },
    {
        id: 2,   
      image: image,
      title: "Best of Ireland in 14 Days Tour",
      description: `Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days`,
      price: "4,523 $",
      isShortned: true,
      showData: true,
    },
    {
        id: 3,   
      image: image,
      title: "Best of Salzburg & Vienna in 8 Days Tour",
      description: `Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!`,
      price: "4,542 $",
      isShortned: true,
      showData: true,
    },
    { 
        id: 4,   
      image: image,
      title: "Best of Rome in 7 Days Tour",
      description: `Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days`,
      price: "4,553 $",
      isShortned: true,
      showData: true,
    },
    {
      id: 5,  
      image: image,
      title: "Best of Poland in 10 Days Tour",
      description: `Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days`,
      price: "4,553 $",
      isShortned: true,
      showData: true,
    },
  ]);


  function removeItem(itemToRemove) {
    setTimeout(() => {
        
        setInfo(info.filter(item => item.id !== itemToRemove.id))
    }, 400);
  }
  return (
    <div>
      <div className="container max-w-5xl mx-auto  ">
        <h1 className="text-4xl p-2 text-center mt-8">Our Tour</h1>
        <div className="w-24  center h-1 mb-10 bg-green-400 mx-auto"></div>
        <div  className="grid gap-8 items-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
          {info.map((data, index) => (
            <div className="xl:w-full shadow-md shadow-zinc-400 rounded-xl w-5/6 ">
              <div className="relative ">
                <span className="absolute text-gray-50 right-0 bg-green-500 p-2">
                  {data.price}
                </span>
                <div className=" image h-80">
                  <img
                    className="h-full w-full"
                    src={data.image}
                    alt="mainimage"
                  />
                </div>
                <div className=" bg-white text-info p-5">
                  <h2 className="center text-xl mb-4 ">{data.title}</h2>
                  {data.isShortned ? (
                    <p className="text-slate-500 text-sm">
                      {data.description.substring(0, 200)}{" "}
                      <button
                        onClick={() => {
                          const newParagraph = [...info];
                          newParagraph[index].isShortned = false;
                          setInfo(newParagraph);
                        }}
                        className="text-amber-500 font-bold"
                      >
                        read more
                      </button>
                      ...
                    </p>
                  ) : (
                    <p className="text-slate-500">
                      {data.description}
                      <button
                        className="text-amber-500 font-bold"
                        onClick={() => {
                          const newParagraph = [...info];
                          newParagraph[index].isShortned = true;
                          setInfo(newParagraph);
                        }}
                      >
                        read less
                      </button>
                    </p>
                  )}

                  <button 
                  onClick={()=> {
                        
                        removeItem(data)
                   
                }}
                  className="w-full border-green-500 text-green-400 p-1 mt-4 hover:bg-green-600 hover:text-slate-200 border-2">
                    Not Interested
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {info.length == 0 ? <div className="items-center justify-center flex"> <button className="bg-green-400 hover:bg-green-600 text-slate-50 border-lime-700 border-2 px-2 py-1 rounded-lg" onClick={()=>window.location.reload()}>refresh</button> </div> : null  }

       
      </div>
    </div>
  );
};

export default Box;
