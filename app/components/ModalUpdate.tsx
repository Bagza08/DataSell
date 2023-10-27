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
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import React from "react";
import { IProduct } from "~/interface/product";
import edit from "../assets/edit.svg";

export default function ModalUpdate(props: IProduct) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        size={"sm"}
        colorScheme="whiteAlpha"
        borderRadius={"full"}
        boxShadow={"md"}
        me={"5px"}
      >
        <Image w={"15px"} src={edit} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Update Product</Text>
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
              <Input hidden name="id" value={props.id} />
              <Input hidden name="action" value="updateproduct" />
              <FormControl isRequired>
                <FormLabel>Nama Product</FormLabel>
                <Input
                  type="text"
                  name="name"
                  defaultValue={props.name}
                  //onChange={handleNameChange}
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Stock Product</FormLabel>
                <Input
                  type="number"
                  name="stock"
                  defaultValue={props.stock}
                  //onChange={handleNameChange}
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Jumlah Terjual</FormLabel>
                <Input
                  type="number"
                  name="sellstock"
                  defaultValue={props.quantityStock}
                  //onChange={handleNameChange}
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
                  <option defaultValue={props.productType} hidden>
                    {props.productType}
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
