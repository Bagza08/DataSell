import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
} from "@chakra-ui/react";
import { Form, Link, useNavigation } from "@remix-run/react";
import srcc from "../assets/src.svg";
import reset from "../assets/reset.svg";
import React from "react";

export default function InputSearch() {
  return (
    <>
      <Form method="get">
        <Flex flexDirection={"row"} gap={2}>
          <FormControl isRequired w={"200px"}>
            <Input
              boxShadow={"md"}
              bg={"white"}
              borderRadius={"full"}
              type="text"
              name="search"
              //value={name}
              //onChange={handleNameChange}
              placeholder="cari produk .."
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="whiteAlpha"
            borderRadius={"20px"}
            boxShadow={"md"}
          >
            <Image w={"15px"} src={srcc} sizes="sm" />
          </Button>
          <Link to={"/home"}>
            <Button type="submit" borderRadius={"full"} boxShadow={"md"}>
              <Image w={"15px"} src={reset} sizes="sm" />
            </Button>
          </Link>
        </Flex>
      </Form>
    </>
  );
}
