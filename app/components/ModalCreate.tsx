import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  Text,
  ModalCloseButton,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import plus from "../assets/plus.svg";

import Filter from "~/components/Filter";
import React from "react";

export default function ModalCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDirection={"row"} alignItems={"center"} gap={3}>
        <Filter />
        <Button
          color={"black"}
          size={"md"}
          onClick={onOpen}
          borderRadius={"full"}
          colorScheme="whiteAlpha"
          boxShadow={"md"}
        >
          Tambah Produk
          <Image ms={2} w={"15px"} src={plus} />
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Tambah Produk Baru</Text>
            {/* <Button
              onClick={onClose}
              p={"0px"}
              colorScheme="none"
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Image w={"30px"} src={CloseCircle} />
            </Button> */}
            <ModalCloseButton />
          </ModalHeader>

          {/* <ModalCloseButton /> */}
          <Form method="post">
            <ModalBody>
              <Input hidden name="action" value="createproduct" />
              <FormControl isRequired>
                <FormLabel>Nama </FormLabel>
                <Input
                  type="text"
                  name="name"
                  //value={name}
                  //onChange={handleNameChange}
                  placeholder="Cth. Kopi"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Stock </FormLabel>
                <Input
                  type="number"
                  name="stock"
                  //value={name}
                  //onChange={handleNameChange}
                  placeholder="Cth. 200"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Jumlah Terjual</FormLabel>
                <Input
                  type="number"
                  name="sellstock"
                  //value={name}
                  //onChange={handleNameChange}
                  placeholder="Cth. 100"
                />
              </FormControl>

              {/* <FormControl isRequired mt={4}>
                <FormLabel>Tanggal Transaksi</FormLabel>
                <Input
                  type="date"
                  name="name"
                  //value={name}
                  //onChange={handleNameChange}
                  placeholder="Cth. 100"
                />
              </FormControl> */}

              <FormControl mt={4} isRequired>
                <FormLabel>Jenis Barang</FormLabel>
                <Select name="type">
                  <option value={""} hidden>
                    --pilih satu--
                  </option>
                  <option value={"konsumsi"}>konsumsi</option>
                  <option value={"pembersih"}>pembersih</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter
              display={"Flex"}
              flexDirection={"row"}
              justifyContent={"flex-end"}
            >
              {/* {isLoading ? (
                <Box style={{ textAlign: "center" }}>
                  <ReactLoading
                    type="spin"
                    color="#3b82f6"
                    height={35}
                    width={35}
                  />
                </Box>
              ) : (
                <>
                  <Box></Box>
                </>
              )} */}
              <Box>
                <Button mr={2} borderRadius={"20px"} onClick={onClose}>
                  Batalkan
                </Button>
                <Button
                  type="submit"
                  onClick={onClose}
                  colorScheme="blue"
                  borderRadius={"20px"}
                >
                  Simpan
                </Button>
              </Box>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}
