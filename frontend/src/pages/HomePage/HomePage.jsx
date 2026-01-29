import { useState, useEffect } from 'react';
import { getProduct } from '../../utilities/prod-api';
import CreateProdForm from "../../components/CreateProd/createProduct";
import ProdList from "../../components/ProdList/productList";

export default function HomePage() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    getProduct().then(data => setProd(Array.isArray(data) ? data : []));
  }, []);

  return (
    <div>
      <CreateProdForm prod={prod} setProd={setProd} />
      <ProdList products={prod} />
    </div>
  );
}