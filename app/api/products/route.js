import ProductModel from "../../../lib/models/ProductModel";
import { data } from "../../../lib/data";
import dbConnect from "../../../lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const { products } = data;

  await dbConnect();

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({
    message: "Products added successfully",
    products,
  });
};
