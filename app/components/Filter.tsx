import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Select,
} from "@chakra-ui/react";
import { Form, Link, useNavigation } from "@remix-run/react";
import srcc from "../assets/src.svg";
import reset from "../assets/reset.svg";
import React from "react";

export default function Filter() {
  return (
    <>
      <Form method="get">
        <Flex flexDirection={"row"} gap={2}>
          <FormControl isRequired w={"150px"}>
            <Select name="type" size={"sm"} bg={"white"} boxShadow={"md"}>
              <option value={""} hidden>
                --Filter--
              </option>
              <option value={"konsumsi"}>nama</option>
              <option value={"pembersih"}>tanggal transaksi</option>
              <option value={"pembersih"}>jenis barang</option>
            </Select>
          </FormControl>
        </Flex>
      </Form>
    </>
  );
}
