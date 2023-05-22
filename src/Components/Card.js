import React from "react";

const Card=()=>{
    return(
<div>
    <div className="w-80 rounded overflow-hidden shadow-lg mt-3">
  <img className="w-full" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Pepproni Pizza</div>
    <p className="text-gray-700 text-base">
      This is pizza
    </p>
    <div className="container w-100 bg-white text-white">
      <select className="m-2 h-100 bg-green-600">
      {Array.from(Array(6),(e,i)=>{
        return(
          <option key={i+1} value={i+1}>{i+1}</option>
        )
      })
      }
      </select>
      <select className="m-2 h-100 bg-green-600">
          <option value="half">Half</option>
          <option value="full">Full</option>
      </select>
      <div className="text-black inline-flex font-medium">Total Price:</div>
    </div>
  </div>
  </div>

</div>
    )
}
export default Card;