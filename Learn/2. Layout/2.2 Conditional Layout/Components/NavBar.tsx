"use client";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar: React.FC = () => {
  const pathName = usePathname();
  console.log(pathName);
  
  return (
    <nav>
      <ul className="login-menu flex justify-around border border-gray-500">
        {pathName === "/login/admin" ? (
          <>
            <li>
              <Link href="/login/user">Login User</Link>
            </li>
            <li>
              <Link href="/login">Login Main</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login/admin">Login Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
