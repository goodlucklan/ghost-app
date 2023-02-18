import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import "./Navbar.style";
export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className="nav"
      style={{
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://i.imgur.com/CMKVhKi.png"
        alt="Bienvenido a GhostGunz"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon!
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
