import React, { useState } from "react";
import logo from "../assets/nav/Group 2131332320.png";
import backyard from "../assets/nav/Frame 1410166002.png";
const links = [
  "Home",
  "About",
  "How it works",
  "Token design",
  "YARD flywheel",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#EFEFF2]">
      <nav className="mx-auto max-w-[1110px] h-16 px-4 sm:px-6 lg:px-[84px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 rounded-full px-3 py-2">
          <img src={logo} alt="logo" className="h-6 w-auto" />
          <img src={backyard} alt="Backyard" className="h-6 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-3">
          {links.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="px-4 py-2 rounded-full text-[13px] font-medium text-[#AEB0B1] hover:bg-[#303030] hover:text-white transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 p-2 rounded-md hover:bg-black/5"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-16 z-50 mx-4 rounded-lg bg-[#EFEFF2] p-2 shadow"
        >
          <ul className="flex flex-col">
            {links.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="block w-full px-4 py-3 rounded-md text-[13px] font-medium text-[#2E2E2E] hover:bg-[#303030] hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
