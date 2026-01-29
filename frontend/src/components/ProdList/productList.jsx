import ProdListItem from '../ProdItem/productItem';

export default function ProdList({ products }) {
  return (
    <div>
      {products && products.map((prod) => {
        return <ProdListItem key={prod._id} prod={prod} />
      })}
    </div>
  );
}