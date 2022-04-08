import Products from "../Product";
import "./styles.css";

export default function ProductsList({ productsList, setCartList, cartList }) {
  return (
    <ul className="products_list">
      {productsList.map((product) => {
        return (
          <Products
            product={product}
            setCartList={setCartList}
            cartList={cartList}
            key={product.id}
          ></Products>
        );
      })}
    </ul>
  );
}
