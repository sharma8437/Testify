import React from 'react';
import teams from "../../public/teams.json";
import choseus from "../assets/choseus.svg";

const ChooseUs = () => {
  return (
    <>

<div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center text-4xl text-red-600 font-bold">

<h1>Why Chose Us !</h1>
</div>
   <div  className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center text-4xl text-red-600 font-bold flex">

   

    
   
    <div className="flex flex-wrap justify-center gap-4 my-10">

      {teams.map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={item.image} // Assuming each team member has an image URL
              alt={item.name} // Assuming each team member has a name
              className="rounded-xl"
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

    <div className='mr-32'>
       <img src={choseus} alt="Chouse Us" className="" />
    </div>

    </div>
    </>
  );
}

export default ChooseUs;
