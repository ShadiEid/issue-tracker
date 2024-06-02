"use client";

import { Box, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b mb-5 px-5 h-14">
      <Flex align={"center"} justify={"between"} className="h-full">
        <Flex align={"center"} gap={"5"}>
          <Link href={"/"}>
            <AiFillBug />
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  className={classNames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 transition-colors": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Box>
          {status === "authenticated" && (
            <Link href={"/api/auth/signout"}>Log out</Link>
          )}
          {status === "unauthenticated" && (
            <Link href={"/api/auth/signin"}>Log on</Link>
          )}
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
