import React, { useState } from "react";
import appStore from "../zustand/appStores";
import { IoSearch } from "react-icons/io5";
function InputSearch() {
  const submit = appStore((state) => state.input);
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submit(inputValue);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2 items-center bg-yellow-300 pl-2 rounded-sm"
    >
      <IoSearch className="text-slate-800 text-2xl" />
      <input
        type="text"
        value={inputValue}
        placeholder="Pokemon..."
        className="w-64 px-2 py-1 outline-none border-none rounded-sm placeholder:text-slate-400"
        onChange={inputChange}
      />
    </form>
  );
}

export default InputSearch;
