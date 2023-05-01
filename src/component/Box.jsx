import React, { useEffect, useState } from "react";
import image from "../assets/main.jpg";

const Box = () => {
  const [info, setInfo] = useState([]);
  const url = 'https://course-api.com/react-tours-project'
  useEffect(()=> {
   fetch(url).then(res => res.json()).
   then(data => {
    const newData = data.map(item=> ({...item, short: true}))
    setInfo(newData)
  })
  .catch(err => console.log(err))
}, []);
  

  function removeItem(itemToRemove) {
    setTimeout(() => {
        
        setInfo(info.filter(item => item.id !== itemToRemove.id))
    }, 400);
  }

  function readMore(index){
    setInfo(prevInfo => {
      const newInfo = [...prevInfo]
      newInfo[index].short = false
      return newInfo
    })
  }
  return (
    <div>
      <div className="container max-w-5xl mx-auto  ">
        <h1 className="text-4xl p-2 text-center mt-8">Our Tour</h1>
        <div className="w-24  center h-1 mb-10 bg-green-400 mx-auto"></div>
        <div  className="grid gap-8 items-start lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
          {info.map((data, index) => (
            <div key={index}  className="xl:w-full shadow-md shadow-zinc-400 rounded-xl w-5/6 ">
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
                  <h2 className="center text-xl mb-4 ">{data.name}</h2>
                  { data.short ? (
                    <p className="text-slate-500 text-sm">
                      {data.info.substring(0, 200)}{" "}
                      <button
                        onClick={()=> {
                        readMore(index) 
                        }}
                        className="text-amber-500 font-bold"
                      >
                        read more
                      </button>
                      ...
                    </p>
                  ) : (
                    <p className="text-slate-500">
                      {data.info}
                      <button
                        className="text-amber-500 font-bold"
                        onClick={ ()=> {
                          const newInfo = [...info]
                          newInfo[index].short = true
                          setInfo(newInfo)

                        }
                        }
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
