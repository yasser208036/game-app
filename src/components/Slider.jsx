import { useEffect, useState } from "react";
import { sliderData } from "../assets/slider";
export default function Slider() {
  const [data, setData] = useState([...sliderData]);
  let interval;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      setData((prevData) => {
        const clonedData = [...prevData];
        const firstItem = clonedData.shift();
        clonedData.push(firstItem);
        return clonedData;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const next = () => {
  //   setData((prevData) => {
  //     const clonedData = [...prevData];
  //     const firstItem = clonedData.shift();
  //     clonedData.push(firstItem);
  //     return clonedData;
  //   });
  //   clearInterval(interval);
  // };

  // const prev = () => {
  //   setData((prevData) => {
  //     const clonedData = [...prevData];
  //     const lastItem = clonedData.pop();
  //     clonedData.unshift(lastItem);
  //     return clonedData;
  //   });
  //   clearInterval(interval);
  // };
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-slate-400">
      <div className="slider bg-gray-400">
        {data.map((game) => {
          return (
            <div
              className="slides"
              style={{ backgroundImage: `url(${game.thumbnail})` }}
              key={game.id}
            >
              <div className="content ">
                <h2 className="text-xl lg:text-5xl font-bold lg:mb-3 mb-1">
                  {game.title}
                </h2>
                <p className="text-sm lg:text-lg font-medium text-white">
                  {game.short_description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="buttons">
        <span className="next" onClick={next}></span>
        <span className="prev" onClick={prev}></span>
      </div> */}
    </div>
  );
}
