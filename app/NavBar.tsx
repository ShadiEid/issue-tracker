"use client";

import {
  Box,
  Container,
  DropdownMenu,
  Flex,
  Avatar,
  Text,
} from "@radix-ui/themes";
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
    <nav className="border-b mb-5">
      <Container className="px-5">
        <Box className="h-14">
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
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Avatar
                      src={session.user?.image!}
                      fallback="?"
                      size={"2"}
                      radius={"full"}
                      className="cursor-pointer"
                      referrerPolicy={"no-referrer"}
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Label>
                      <Text>{session.user!.email}</Text>
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                      <Link href={"/api/auth/signout"}>Log out</Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}

              {status === "unauthenticated" && (
                <Link href={"/api/auth/signin"}>Log on</Link>
              )}
            </Box>
          </Flex>
        </Box>
      </Container>
    </nav>
  );
};

export default NavBar;
