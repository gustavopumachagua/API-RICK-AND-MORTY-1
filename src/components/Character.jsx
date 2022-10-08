import React from "react";

function Character(props) {
  return (
    <section className="px-8 py-6 pb-20 bg-cardLight dark:bg-bodyDark">
      <h2 className="px-5 py-6 text-3xl font-bold text-primary dark:text-secondary ">
        Characters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-14 md:grid-cols-3  gap-x-6  lg:grid-cols-4 xl:grid-cols-5">
        {props.children}
      </div>
    </section>
  );
}

export { Character };
