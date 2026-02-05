'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface NavItem {
  name: string;
  fragment: string;
}

export default function Header() {
  const [hash, setHash] = useState<string>("#");
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const navItems: NavItem[] = [
    { name: "Home", fragment: "#home" },
    { name: "About", fragment: "#about" },
    { name: "Skills", fragment: "#skills" },
    { name: "Experience", fragment: "#experience" },
    { name: "Projects", fragment: "#projects" },
    { name: "Contact", fragment: "#contact" },
  ];

  const updateIndicator = (targetHash: string) => {
    const activeElement = itemRefs.current.get(targetHash);
    const navElement = navRef.current;

    if (activeElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      setIndicatorStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
      });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setHash(newHash);
      updateIndicator(newHash);
    };
    const initialHash = window.location.hash || "#home";
    setHash(initialHash);
    updateIndicator(initialHash);

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (fragment: string) => {
    setHash(fragment);
    updateIndicator(fragment);
  };

  return (
    <header className={"w-fit min-w-3xl mx-auto border border-black/8 rounded-full shadow-xs fixed top-5 z-50 backdrop-blur-sm"}>
      <div className={"flex flex-row items-center justify-between w-full px-8"}>
        <div>
          <Image
            src={"/logo.svg"}
            alt={"logo"}
            width={40}
            height={40}
            className={"rounded-full"}
          />
        </div>
        <nav>
          <ul ref={navRef} className={"relative flex flex-row items-center justify-between gap-1"}>
            <li
              className="absolute top-0 h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              aria-hidden="true"
            />
            {navItems.map((item) => (
              <li key={item.fragment} className="relative z-10">
                <a
                  ref={(el) => {
                    if (el) itemRefs.current.set(item.fragment, el);
                  }}
                  href={item.fragment}
                  onClick={() => handleClick(item.fragment)}
                  className={`block px-4 py-3 text-md font-medium rounded-full transition-colors duration-300 ${hash === item.fragment ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}