import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-0.5">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/">Demarrer</Link>
        </li>
        <li>
          <Link href="/">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
