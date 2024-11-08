import React from 'react';

import nikesh from "../assets/nikesh.jpg"



const Teams = () => {

  const teams =[
    {
        "id":"1",
        "image":nikesh,
        "name":"Nikesh sharma",
        "description":"This is nikesh sharma"

    },
    {
        "id":"2",
        "image":nikesh,
        "name":"sonu ",
        "description":"This is nikesh sharma"

    },
    {
        "id":"3",
        "image":nikesh,
        "name":" Mehul Kalra",
        "description":"This is nikesh sharma"

    },
    {
        "id":"4",
        "image":nikesh,
        "name":"Aryan sharma",
        "description":"This is nikesh sharma"

    },
    {
        "id":"5",
        "image":nikesh,
        "name":"Sujal",
        "description":"This is nikesh sharma"

    }
]

  return (
    <>
   <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center text-4xl text-red-600 font-bold">

      <h1>Meets Our Team !</h1>
   </div>
    <div className="flex flex-wrap justify-center gap-4 my-10 ">

      {teams.map((item, index) => (
        <div key={index} className="card bg-base-100 w-60 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={item.image} // Assuming each team member has an image URL
              alt={item.name} // Assuming each team member has a name
              className="rounded-xl  w-48 h-52"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2> {/* Displaying name */}
            <p>{item.description}</p> {/* Displaying description */}
            <div className="card-actions">
             
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Teams;
