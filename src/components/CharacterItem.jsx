import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FaHeart, FaRegHeart } from "react-icons/fa";

function CharacterItem({ character, onFavorite, favorites }) {
  const [setHover] = React.useState(false);

  const isFavorite = favorites.some((item) => item.id === character.id);

  return (
    <section className="bg-bodyLight  w-full h-56 relative rounded-3xl  dark:bg-cardDark">
      <div className="w-full h-40 bg-transparent cursor-pointer group perspective ">
        <div className=" preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 relative">
          <div
            className="absolute backface-hidden  w-full h-full  "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={character.id}
          >
            <LazyLoadImage
              className="w-full h-56 rounded-3xl border-2 border-slate-900"
              src={character.image}
              alt={character.name}
              width="100%"
              min-height="144"
              effect="blur"
            />
            <h1 className="text-xl font-semibold text-center -mt-2 text-primary dark:text-secondary">
              {" "}
              {character.name}
            </h1>
          </div>

          <div className="absolute my-rotate-y-180 backface-hidden w-full h-56 bg-bodyLight dark:bg-cardDark overflow-hidden rounded-3xl">
            <div className="text-center flex flex-col items-center justify-center h-full text-primary dark:text-secondary px-2 pb-10">
              <p className="my-2 text-lg font-bold dark:text-white text-black">
                {character.species}
              </p>
              <ul className="text-justify">
                <li className="">
                  <samp className="font-semibold dark:text-white text-black">
                    Gender:{" "}
                  </samp>
                  {character.gender}
                </li>
                <li className="">
                  <samp className="font-semibold dark:text-white text-black">
                    Origin:{" "}
                  </samp>
                  {character.origin.name}
                </li>
                <li className="font-semibold">
                  <samp className="font-semibold dark:text-white text-black">
                    Location:{" "}
                  </samp>
                  {character.location.name}
                </li>
              </ul>
              <button className="bg-teal-500 px-2  font-medium text-white rounded-full absolute -bottom-10 delay-400 duration-1000 group-hover:bottom-3 scale-0 group-hover:scale-125">
                {character.status}
              </button>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="">
        <button
          className="absolute top-3 right-3 hover:bg-red-400 hover:rounded-full w-6 h-6 "
          onClick={() => {
            onFavorite(character);
          }}
        >
          {isFavorite ? (
            <FaHeart className="text-red-800 text-2xl " />
          ) : (
            <FaRegHeart className="text-red-800 text-2xl " />
          )}
        </button>
      </figcaption>
    </section>
  );
}

export { CharacterItem };
