import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const getProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/products");
    const products = await response.json();
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <></>;
}

export default App;
