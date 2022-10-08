import React from "react";

function Favorites({ image, name }) {
  const firstName = name.split(" ");
  return (
    <div className="flex-shrink-0  snap-center  ">
      <img
        className=" h-20 w-20 rounded-full border-4 border-bodyLight "
        src={image}
        alt={name}
      />
      <p className="text-center text-base font-medium text-primary dark:text-secondary mt-1">
        {firstName[0]}
      </p>
    </div>
  );
}

export { Favorites };
