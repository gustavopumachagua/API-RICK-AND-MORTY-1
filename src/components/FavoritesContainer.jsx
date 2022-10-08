import React from "react";

function FavoritesContainer(props) {
  return (
    <section className="px-5 py-5 bg-cardLight dark:bg-bodyDark">
      <h2 className="px-5 py-1 text-3xl font-bold text-primary dark:text-secondary">
        Favorites
      </h2>
      <div className="mt-4 flex overflow-x-auto space-x-8 w-auto bg-bodyLight dark:bg-cardDark px-8 py-4 snap-x">
        {props.children}
      </div>
    </section>
  );
}
export { FavoritesContainer };
