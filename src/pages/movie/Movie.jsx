import React, { memo, useRef, useState, useEffect } from "react";

const Movie = () => {
  const name = useRef(null);
  const genre = useRef(null);
  const rating = useRef(null);

  const [movieData, setMovieData] = useState([]);
  const [editId, setEditId] = useState(null);

  const movieSave = (e) => {
    e.preventDefault();

    const data = {
      id: editId || new Date().getTime(),
      name: name.current.value,
      genre: genre.current.value,
      rating: rating.current.value,
    };

    if (editId) {
      setMovieData((prev) =>
        prev.map((item) => (item.id === editId ? data : item))
      );
    } else {
      setMovieData((prev) => [...prev, data]);
    }

    name.current.value = "";
    genre.current.value = "";
    rating.current.value = "";
    setEditId(null);
  };

  const handleEdit = (item) => {
    name.current.value = item.name;
    genre.current.value = item.genre;
    rating.current.value = item.rating;
    setEditId(item.id);
  };

  return (
    <section>
      <div className="container flex flex-col items-center justify-center py-[30px]">
        <div className="bg-slate-700 w-[650px] max-[670px]:w-[450px] max-[460px]:w-[350px] p-[30px] rounded-[5px] mb-6">
          <h2 className="text-[#fff] text-center mb-[30px] text-[30px] font-medium">
            {editId ? "Update Movie" : "Create Movie"}
          </h2>
          <form onSubmit={movieSave} className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <label className="font-medium text-[#fff]">Movie name</label>
              <input
                required
                ref={name}
                className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                type="text"
                autoComplete="off"
                placeholder="Enter movie name"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label className="font-medium text-[#fff]">Genre</label>
              <input
                required
                ref={genre}
                className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                type="text"
                autoComplete="off"
                placeholder="Enter genre"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label className="font-medium text-[#fff]">Rating</label>
              <input
                required
                ref={rating}
                min="0.1"
                max="10"
                step="0.1"
                className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                type="number"
                autoComplete="off"
                placeholder="Enter rating"
              />
            </div>
            <button
              type="submit"
              className="text-slate-950 bg-white py-[10px] font-medium rounded-2xl mt-[30px] hover:cursor-pointer outline-0 hover:text-white hover:bg-slate-700 duration-300 border border-[white]"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="grid grid-cols-4 max-[1251px]:grid-cols-3 max-[990px]:grid-cols-2 max-[650px]:grid-cols-1 gap-[30px]">
          {movieData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleEdit(item)}
              className="bg-white text-slate-900 w-[300px] p-[20px] rounded-[5px] shadow-lg cursor-pointer hover:shadow-xl duration-200"
            >
              <h3 className="text-[20px] font-semibold mb-2">Movie Info:</h3>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Genre:</strong> {item.genre}
              </p>
              <p>
                <strong>Rating:</strong> {item.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Movie);
