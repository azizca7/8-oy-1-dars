import ProductsCard from "@/copmonents/ProductsCard";

import axios from "axios";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

const page = async () => {
  const data = await getProducts();

  return (
    <div>
      <nav className="flex justify-center gap-7 p-5 mb-16">
        <Link
          href="/"
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          Home
        </Link>

        <Link
          href="/products"
          className="text-lg font-semibold text-blue-600 underline"
        >
          Products
        </Link>
      </nav>

      <div className="container mx-auto grid grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((product) => <ProductsCard p={product} key={product.id} />)
        ) : (
          <p className="text-center col-span-4 text-red-500">
            Ma'lumot topilmadi
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
