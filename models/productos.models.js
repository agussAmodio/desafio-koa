const productosSchema = new mongoose.Schema({
  product_name: String,
  product_description: String,
  product_price: Number,
  product_imgUrl: String,
  product_stock: Number,
  id: String,
});

const products_model = mongoose.model("productos", productosSchema);

export default products_model;
