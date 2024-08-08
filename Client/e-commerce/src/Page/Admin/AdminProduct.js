import React, { useState, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, uploadProduct } from "../../redux/slice/uploadSlice";
import { message } from "antd";

function AdminProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.product);



  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Memoize the transformed data
  const memoizedData = useMemo(() => {
    return Array.isArray(data)
      ? data.map((product) => ({
          ...product,
          formattedPrice: new Intl.NumberFormat().format(product.price),
        }))
      : [];
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const image = fileInputRef.current.files[0];

    if (!image) {
      message.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("description", description);

    dispatch(uploadProduct(formData))
      .unwrap()
      .then(() => {
        message.success("Product Added Successfully");
        fileInputRef.current.value = ""; // Reset file input
        setName("");
        setCategory("");
        setSubCategory("");
        setPrice("");
        setDescription("");
      })
      .catch((error) => {
        message.error("Failed to add product: " + error.message);
      });
  };

  return (
    <div>
      <div className="bg-indigo-700 flex justify-center py-3">
        <h1 className="text-white text-2xl">Upload Product</h1>
      </div>

      <div className="flex justify-between py-5">
        <div className="w-1/3 px-5 h-fit bg-slate-700 rounded-md shadow-lg py-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="pr-3 text-white">Image:</label>
              <input type="file" ref={fileInputRef} className="text-white" />
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-white">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="px-3 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-white">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Product Category"
                className="px-3 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-white">SubCategory</label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Product SubCategory"
                className="px-3 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-white">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
                className="px-3 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-2 text-white">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                className="px-3 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div>
              <button
                className="bg-gradient-to-r from-purple-800 to-pink-900 text-white px-5 py-2 rounded-md w-full"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </button>
            </div>

            {isLoading && <p className="text-white mt-2">Uploading...</p>}
            {isError && (
              <p className="text-red-500 mt-2">Error uploading product</p>
            )}
          </form>
        </div>

        <div className="w-2/3 bg-slate-700 rounded-md shadow-lg px-5 mx-5 py-5">
          <h1 className="text-white text-2xl mb-4 flex justify-center">
            View Products
          </h1>
          <div className="h-1 bg-red-950 mb-5"></div>
          <div className="flex flex-col gap-10">
            {memoizedData.map((product) => (
              <div key={product._id} className="flex justify-around">
                <img className="w-1/3"
                  src={`http://localhost:5000/${product.image}`}
                  alt={product.image}
                />
                <div className="py-3 text-white">
                  <h1>{product.image}</h1>
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <p>{product.category}</p>
                  <p>{product.subCategory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
