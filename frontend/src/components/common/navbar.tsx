import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCar,
  AiOutlineUser,
} from "react-icons/ai";

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  function ProfileButton() {
    return (
      <Link href="/profile" className="flex gap-2 items-center">
        <AiOutlineUser className="text-2xl" />
        <span className="mb-1">Minha conta</span>
      </Link>
    );
  }

  function SignupButton() {
    return (
      <Link href="/cadastrar-se" className="flex gap-2 items-center">
        <AiOutlineUser className="text-2xl" />
        <span className="mb-1">Cadastrar-se</span>
      </Link>
    );
  }

  function handleToggle() {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <nav className="grid lg:grid-cols-2 lg:items-center font-medium max-w-[1200px] lg:mx-auto">
      <div className="p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-3xl font-extrabold w-fit">PLACEHOLDER</h1>
        </Link>
        {!toggleSidebar ? (
          <AiOutlineMenu
            onClick={handleToggle}
            className="text-3xl text-right lg:hidden cursor-pointer"
          />
        ) : (
          <AiOutlineClose
            onClick={handleToggle}
            className="text-3xl text-right lg:hidden cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${
          !toggleSidebar ? "hidden" : "block"
        }  w-full px-4 pb-6 lg:pb-0 bg-customBlack-200 font-bold lg:block`}
      >
        <ul className="flex flex-col lg:flex-row lg:justify-end p-1 gap-5 animate-menuSlide lg:animate-none">
          <li className="w-fit">
            <Link href="/carros-usados" className="flex gap-2 items-center">
              <AiOutlineCar className="text-2xl" />
              <span className="mb-1">Comprar carros</span>
            </Link>
          </li>
          <li className="w-fit">{isAuthenticated ? <ProfileButton /> : <SignupButton />}</li>
        </ul>
      </div>
    </nav>
  );
}
