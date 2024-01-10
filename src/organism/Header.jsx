import React from "react";
import Logo from "../atoms/Logo";
import InputSearch from "../atoms/InputSearch";

function Header() {
  return (
    <header className="w-full items-center overflow-hidden h-24 bg-slate-900 shadow-sm flex justify-between px-7 mb-28">
      <Logo />
      <InputSearch />
    </header>
  );
}

export default Header;
