import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://i.imgur.com/CMKVhKi.png"
        alt="Bienvenido a GhostGunz"
        width={100}
        height={50}
        style={{
          padding: '5px'
        }}
      />
      <Spacer css={{ flex: 1 }} />

      <NextLink href="/profile" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Text color="black">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
