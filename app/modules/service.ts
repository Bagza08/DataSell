import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProduct(name: any) {
  return await prisma.product.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function createProduct(data: any) {
  try {
    const createProduct = await prisma.product.create({
      data: {
        name: data.name,
        stock: parseInt(data.stock),
        quantityStock: parseInt(data.quantityStock),
        productType: data.productType,
      },
    });

    return createProduct;
  } catch (error) {
    console.log("error service", error);
  }
}

export async function updateProduct(id: any, data: any) {
  try {
    const updateproduct = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        stock: parseInt(data.stock),
        quantityStock: parseInt(data.quantityStock),
        productType: data.productType,
      },
    });

    return updateproduct;
  } catch (error) {
    console.log("error service", error);
  }
}

export async function deleteProduct(id: any) {
  return await prisma.product.delete({
    where: { id: Number(id) },
  });
}
