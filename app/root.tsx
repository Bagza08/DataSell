import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import { Document } from "./Document";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const theme = extendTheme({
  fonts: {
    Body: "montserrat",
  },
});

export default function App() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
