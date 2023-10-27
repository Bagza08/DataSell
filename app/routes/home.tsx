import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  type MetaFunction,
  type ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { Await, useHref, useLoaderData } from "@remix-run/react";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "~/modules/service";
import ModalCreate from "../components/ModalCreate";
import moment from "moment";
import ModalDelete from "~/components/ModalDelete";
import ModalUpdate from "~/components/ModalUpdate";
import InputSearch from "~/components/InputSearch";

export const meta: MetaFunction = () => {
  return [
    { title: "My New App" },
    { name: "description", content: "Welcome to My New App!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") ?? "";

  return await getProduct(search);
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const action = formData.get("action");
  const name = formData.get("name");
  const stock = formData.get("stock");
  const quantityStock = formData.get("sellstock");
  const productType = formData.get("type");

  console.info("ini name:", name);
  console.info("ini stock:", stock);
  console.info("ini sellstock:", quantityStock);
  console.info("ini type:", productType);

  if (action === "createproduct") {
    return await createProduct({
      name,
      stock,
      quantityStock,
      productType,
    });
  } else if (action === "deleteproduct") {
    const id = formData.get("id");
    return await deleteProduct(id);
  } else if (action === "updateproduct") {
    const id = formData.get("id");

    return await updateProduct(id, {
      name,
      stock,
      quantityStock,
      productType,
    });
  }
}

export default function Home() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Flex bg={"#eee"}>
        <Box w={"15%"} h={"100vh"}></Box>
        <Box w={"70%"} h={"100vh"} py={"50px"} bg={"#eee"}>
          <Box w={"100%"} mb={"25px"}>
            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <InputSearch />

              <ModalCreate />
            </Flex>
          </Box>

          <Box>
            <TableContainer borderRadius={"10px"} boxShadow={"md"} bg={"white"}>
              <Table variant="striped" size="sm">
                <Thead>
                  <Tr textAlign={"center"}>
                    <Th textAlign={"center"}>No</Th>
                    <Th textAlign={"center"}>Nama</Th>
                    <Th textAlign={"center"}>Stock</Th>
                    <Th textAlign={"center"}>Jumlah Terjual</Th>
                    <Th textAlign={"center"}>Tanggal Transaksi</Th>
                    <Th textAlign={"center"}>Jenis Barang</Th>
                    <Th textAlign={"center"}>Aksi</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((data, no = 1) => (
                    <Tr key={data.id}>
                      <Td textAlign={"center"}>{no + 1}</Td>
                      <Td textAlign={"center"}>{data.name}</Td>
                      <Td textAlign={"center"}>{data.stock}</Td>
                      <Td textAlign={"center"}>{data.quantityStock}</Td>
                      <Td textAlign={"center"}>
                        {moment(data.createdAt).format("DD/MM/YYYY HH:mm")}
                      </Td>
                      <Td textAlign={"center"}>{data.productType}</Td>
                      <Td textAlign={"center"}>
                        <ModalUpdate
                          id={data.id}
                          name={data.name}
                          stock={data.stock}
                          quantityStock={data.quantityStock}
                          productType={data.productType}
                        />
                        <ModalDelete
                          id={data.id}
                          name={data.name}
                          stock={data.stock}
                          quantityStock={data.quantityStock}
                          productType={data.productType}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box w={"15%"} h={"100vh"}></Box>
      </Flex>
    </>
  );
}
