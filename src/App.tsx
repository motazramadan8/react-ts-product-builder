import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  const render = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {render}
      </div>
    </main>
  );
};

export default App;
