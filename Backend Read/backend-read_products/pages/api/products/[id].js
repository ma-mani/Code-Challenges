import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    response
      .status(200)
      .json({ status: `Product ${id} successfully deleted.` });
  }

  if (request.method === "PUT") {
    const update = request.body;
    console.log(update);
    console.log(request.body);
    console.log(id);
    try {
      // Product.findByIdAndUpdate(id, update);
      await Product.findByIdAndUpdate(id, update);
      response.status(200).json({ status: "Product updated" });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(product);
  }
}
