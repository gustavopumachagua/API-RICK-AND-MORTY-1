import React from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";

import { Header } from "./components/Header";
import { Character } from "./components/Character";
import { CharacterItem } from "./components/CharacterItem";
import { SearchCharacter } from "./components/SearchCharacter";
import { Favorites } from "./components/Favorites";
import { FavoritesContainer } from "./components/FavoritesContainer";
import { Placeholder } from "./components/Placeholder";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useLocalStorage("FAVORITES_V1", []);
  const [state, dispach] = React.useReducer(favoriteReducer, initialState);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character?page=2")
      .then((response) => response.json())
      .then((data) => {
        dispach({ type: "CHARACTERS", payload: data.results });
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    const body = document.querySelector("body");
    body.className = state.darkMode ? "dark" : "";
  }, [state.darkMode]);

  const filteredUsers = React.useMemo(
    () =>
      state.characters.filter((user) => {
        return user.name.toLowerCase().includes(state.search.toLowerCase());
      }),
    [state.characters, state.search]
  );

  const onFavorite = (favorite) => {
    const newFavorites = [...favorites];
    const isNewFavorite = newFavorites.some((item) => item.id === favorite.id);

    if (!isNewFavorite || newFavorites.length === 0) {
      newFavorites.push(favorite);
    } else {
      const value = newFavorites.findIndex((item) => item.id === favorite.id);
      newFavorites.splice(value, 1);
    }

    setFavorites(newFavorites);
  };
  const onSearchCharacter = (value) =>
    dispach({ type: "SEARCH_CHARACTER", payload: value });
  const onDarkMode = () => dispach({ type: "DARK_MODE" });

  return (
    <>
      <Header darkMode={state.darkMode} setDarkMode={onDarkMode}>
        <SearchCharacter
          search={state.search}
          setSearch={onSearchCharacter}
          darkMode={state.darkMode}
        />
      </Header>

      <main>
        {favorites.length > 0 && (
          <FavoritesContainer>
            {favorites.map((favorite) => (
              <Favorites
                key={favorite.id}
                image={favorite.image}
                name={favorite.name}
              />
            ))}
          </FavoritesContainer>
        )}

        <Character isDark={state.darkMode}>
          {loading ? (
            <Placeholder />
          ) : (
            filteredUsers.map((character) => (
              <CharacterItem
                key={character.id}
                character={character}
                favorites={favorites}
                onFavorite={onFavorite}
              />
            ))
          )}
        </Character>
      </main>
      <Footer />
    </>
  );
}

// -----------------------------------------------------------
const isDarkUser =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState = {
  characters: [],
  search: "",
  darkMode: isDarkUser || false,
};
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "SEARCH_CHARACTER":
      return {
        ...state,
        search: action.payload,
      };
    case "DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return { ...state };
  }
};
export default App;
