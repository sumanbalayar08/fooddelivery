import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
   
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md w-4/6 flex">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 bg-gray-800 rounded-md w-full text-white mr-2" 
        />
        <button className="bg-green-600 font-bold rounded-md px-4" type="submit">Search</button>
      </div>
    <Slider {...settings}>
      <div>
        <img
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
          alt="image 1"
          className="h-80 w-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg"
          alt="image 2"
          className="h-80 w-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg"
          alt="image 3"
          className="h-80 w-full object-cover"
        />{" "}
      </div>
    </Slider>
    </div>
  );
};

export default Carousal;
