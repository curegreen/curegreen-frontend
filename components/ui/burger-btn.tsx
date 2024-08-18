import React from "react";

export default function NavBurgerBtn({
  toggleDrawer,
  state,
}: {
  toggleDrawer: (state: boolean) => void;
  state: boolean;
}) {
  const genericHamburgerLine = `h-1 my-1 rounded-full ${
    state ? "bg-secondary-white" : "bg-primary-green"
  } transition ease-in-out transform duration-300`;
  return (
    <>
      <div
        className="flex flex-col h-12 w-12 mx-6 rounded justify-center items-center group relative cursor-pointer"
        onClick={() => toggleDrawer(!state)}
      >
        <div
          className={`${genericHamburgerLine} ${
            state
              ? "-rotate-45 translate-y-1 translate-x-2 opacity-100 group-hover:opacity-80 w-1/2"
              : "opacity-100 group-hover:opacity-80 w-1/2 absolute top-0 left-0"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            state
              ? "opacity-100 w-full rotate-45"
              : "opacity-100 group-hover:opacity-80 w-full"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            state
              ? "-rotate-45 -translate-y-1 -translate-x-2 opacity-100 group-hover:opacity-80 w-1/2"
              : "opacity-100 group-hover:opacity-80 w-1/2 absolute bottom-0 right-0"
          }`}
        />
      </div>
    </>
  );
}
