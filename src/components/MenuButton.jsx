import { useEffect, useState } from "react";
import { optionNav } from "../../constants";

export default function MenuButton({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="rounded p-2">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 stroke-secondary dark:stroke-gray-200"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-secondary dark:text-gray-200"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>
      <div
        className={`transform bg-background dark:bg-dark-secondary border-r fixed z-50 top-0 left-0 w-72 h-screen shadow md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-8 font-semibold mt-4 text-secondary dark:text-gray-300">
          <h3 className="font-bold text-lg">Menu</h3>
          <hr className="bordx|er-gray-300" />
          <div className="mt-4 flex flex-col gap-8">
            {optionNav.map((option) => (
              <a
                key={option.path}
                href={currentPath == "/" ? option.path : `/${option.path}`}
                onClick={() => setIsOpen(!isOpen)}
                className="text-xl"
              >
                {option.name}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
