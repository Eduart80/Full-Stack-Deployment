export default function ProdListItem({ prod }) {
  return (
    <div>
      <h2>{prod.name}</h2>
      <p>{prod.description}</p>
      <p>${prod.price}</p>
      <p>{prod.category}</p>
      <p>{prod.inStock}</p>
      <p>{prod.tags}</p>
      <button>Delete</button>
    </div>
  );
}

