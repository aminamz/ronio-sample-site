"use client";
import styles from "../Header.module.css";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

import { FiUser, FiSun, FiMoon } from "react-icons/fi";
import ir from "@/app/assets/ir.svg";
import uk from "@/app/assets/uk.svg";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return <li className="md:h-5 md:w-5"></li>;

  const dark = theme === "dark";
  return (
    <li
      className="md:h-5 md:w-5 hover:cursor-pointer"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {!dark ? <Moon /> : <Sun />}
    </li>
  );

  //   if (!mounted)
  //     return <Button variant="" size="icon" disabled={true}></Button>;
  //   const dark = theme === "dark";

  //   return (
  //     <Button
  //       variant="secondary"
  //       size="icon"
  //       onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
  //     >
  //       {dark ? <Moon /> : <Sun />}
  //     </Button>
  //   );
};

const LangToggle = () => {
  const [isFarsi, setIsFarsi] = useState(true);
  return (
    <button
      className={styles.lang}
      onClick={() => setIsFarsi((isFarsi) => !isFarsi)}
    >
      <Image src={isFarsi ? ir : uk} alt="Farsi" />
    </button>
  );
};
export { LangToggle, ThemeToggle };
