import mongoose from "mongoose";

const { Schema } = mongoose;

// 1. create a Schema
const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    currency: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    collection: "products",
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
