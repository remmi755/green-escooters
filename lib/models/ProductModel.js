import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    mainTitle: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    stockQuantity: { type: String, required: true, default: 0 },
    productCategory: { type: String, required: true },
    CTALink: { type: String },
    SKU: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
