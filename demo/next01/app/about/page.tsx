import React from "react";
import style from "./style.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Link href={"/"}>Go to Home page</Link>
      <div className={style.main}>About</div>
    </>
  );
}
