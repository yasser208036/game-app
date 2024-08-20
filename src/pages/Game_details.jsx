import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_HOST, API_KEY } from "../assets/api_helpers";
export default function Game_details() {
  // React Slider
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // Get Data
  const params = useParams();
  const [gameDetail, setGameDetail] = useState({});
  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(`/game`, {
          baseURL: `https://${API_HOST}/api`,
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
          },
          params: { id: `${params.gameId}` },
        });
        setGameDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDetails();
  }, []);
  return (
    <div className="game-details">
      <img
        className="fixed inset-0 size-full object-cover opacity-40 -z-10"
        src={gameDetail.screenshots?.[1].image}
        alt=""
      />
      <div className="container mt-20 gap-8 md:space-x-8 flex flex-col md:flex-row justify-between relative z-20">
        <div className="flex flex-1 flex-col gap-3 max-w-[580px] text-gray-200">
          <h1 className="font-bold text-white text-4xl">{gameDetail.title}</h1>
          <div className="flex justify-between items-center">
            <p>{gameDetail.publisher}</p>
            <span className="text-white p-2 text-sm bg-orange-500 rounded-3xl">
              {gameDetail.genre}
            </span>
          </div>
          <p>{gameDetail.short_description}</p>
          <a
            className="play mx-auto w-fit mt-2 px-4 py-3 border-2 uppercase border-orange-400"
            href={gameDetail.game_url}
            target="_blank"
          >
            play game
          </a>
        </div>
        <div className="image-contain ">
          <img src={gameDetail.thumbnail} alt={gameDetail.name} />
        </div>
      </div>
      <div className=" bg-black bg-opacity-60 -mt-14">
        <p className="container text-gray-200 relative z-10 pt-24 pb-6 leading-8 tracking-wide">
          {gameDetail.description}
        </p>
      </div>
      {/* Image Slider */}
      <div className="slider-container relative z-10">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {gameDetail.screenshots?.map((el) => {
            return (
              <img
                key={el.id}
                className="slider-item size-full object-cover lg:h-screen"
                src={el.image}
              />
            );
          })}
        </Slider>
      </div>
      {/* Game Info */}
      <div className="container py-7 flex flex-col md:flex-row gap-9 text-white justify-between relative z-20">
        <div className="w-full h-fit divide-y divide-gray-400 border-b border-b-gray-400">
          <p className="flex justify-between items-center py-4">
            Developer
            <span className="border-b">{gameDetail.developer}</span>
          </p>
          <p className="flex justify-between items-center py-4">
            Publisher
            <span className="border-b">{gameDetail.publisher}</span>
          </p>
          <p className="flex justify-between items-center py-4">
            Release Date
            <span>{gameDetail.release_date}</span>
          </p>
          <p className="flex justify-between items-center py-4">
            Genre<span className="border-b">{gameDetail.genre}</span>
          </p>
          <p className="flex justify-between items-center py-4">
            Platform
            <span className="border-b">{gameDetail.platform}</span>
          </p>
        </div>
        <div className="p-5 flex w-full flex-col gap-4 backdrop-blur-md border-2 border-orange-500 rounded-2xl ">
          <h2>Minimum System Requirements</h2>
          <div>
            <p>Graphics</p>
            <p>{gameDetail.minimum_system_requirements?.graphics}</p>
          </div>
          <div>
            <p>Memory</p>
            <p>{gameDetail.minimum_system_requirements?.memory}</p>
          </div>
          <div>
            <p>OS</p>
            <p>{gameDetail.minimum_system_requirements?.os}</p>
          </div>
          <div>
            <p>Processor</p>
            <p>{gameDetail.minimum_system_requirements?.processor}</p>
          </div>
          <div>
            <p>Storage</p>
            <p>{gameDetail.minimum_system_requirements?.storage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
