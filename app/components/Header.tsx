"use client";

import styles from "@/app/components/Header.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiUser } from "react-icons/fi";
import icon from "@/app/assets/favicon.webp";
import { LangToggle, ThemeToggle } from "./Header/Toggles";
import clsx from "clsx";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
  return (
    <header
      className={clsx([
        "flex flex-col items-center border-b  md:border-none z-20",
        `${isScroll ? styles.scroll : "p-4 w-lg"}`,
      ])}
    >
      <nav className="flex justify-between max-w-5xl w-full">
        <div className="flex flex-row gap-2 items-center">
          <div className={styles.logo}>
            <Image className={styles.ico} src={icon} alt="Ronio" />
            <span>رونیو</span>
          </div>
          <div className="flex flex-row gap-2">
            <Link href="./">وبلاگ</Link>
            <Link href="./">درباره ما</Link>
          </div>
        </div>
        <ul className="flex px-3 gap-5 items-center ">
          <ThemeToggle />

          <li className="md:h-5 md:w-5">
            <FiUser style={{ width: "100%", height: "100%" }} />
          </li>
          <li className="h-5 w-5 md:h-8 md:w-8">
            <LangToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
