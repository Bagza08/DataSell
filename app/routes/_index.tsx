import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <Flex
        bg={"blue.500"}
        w={"100%"}
        h={"100vh"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          data-aos="fade-up"
          data-aos-duration="500" // Opsi durasi animasi
          data-aos-delay="100" // Opsi penundaan animasi
          data-aos-offset="200" // Opsi offset animasi
          mb={"70px"}
          color={"white"}
          textAlign={"center"}
        >
          Selamat datang di <br /> Aplikasi Data Penjualan
        </Heading>
        <Link to={"/home"}>
          <Button borderRadius={"full"} size={"md"}>
            MULAI
          </Button>
        </Link>
      </Flex>
    </>
  );
}
