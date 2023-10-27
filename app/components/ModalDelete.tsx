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
import trash from "../assets/trash.svg";

export default function ModalDelete(props: IProduct) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        size={"sm"}
        borderRadius={"full"}
        colorScheme="whiteAlpha"
        boxShadow={"md"}
      >
        <Image w={"15px"} src={trash} />
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        size={"xl"}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <Form method="post">
            <Input hidden name="id" value={props.id} />
            <Input hidden name="action" value="deleteproduct" />
            <ModalHeader
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Hapus Alamat</Text>
              <ModalCloseButton />
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              Apakah kamu yakin untuk menghapus
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {props.name}{" "}
              </span> <br /> Kamu tidak akan dapat mengembalikan Barang yang
              sudah dihapus.
            </ModalBody>
            <ModalFooter
              display={"Flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
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
                <Button
                  borderRadius="20px"
                  colorScheme="white"
                  color={"black"}
                  border={"1px solid #aeaeae"}
                  mr={3}
                  onClick={onClose}
                >
                  Batalkan
                </Button>
                <Button
                  type="submit"
                  borderRadius="20px"
                  colorScheme="blue"
                  //onClick={() => alert("Tombol Khusus Modal 2")}
                  //onClick={onClose}
                  onClick={onClose}
                >
                  Ya, Hapus
                </Button>
              </Box>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}
