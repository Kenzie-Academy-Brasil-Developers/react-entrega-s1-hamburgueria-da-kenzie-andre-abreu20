import "./styles.css";

export default function Products({ product, setCartList, cartList }) {
  function handleAlert() {
    alert("Item ja adicionado ao carrinho");
    return false;
  }
  return (
    <li className="card" key={product.id}>
      <div className="card_img_div">
        <img
          src={product.img}
          alt=""
          className={
            product.name === "Milkshake Ovomaltine"
              ? "card_img_Milkshake"
              : product.category
          }
        ></img>
      </div>
      <div className="card_description">
        <h3 className="card_name">{product.name}</h3>
        <span className="card_category">{product.category}</span>
        <p className="card_price">
          R${product.price.toFixed(2).replace(".", ",")}
        </p>
        <button
          className="card_buttons"
          onClick={() => {
            cartList.find((element) => element.id === product.id) !== undefined
              ? handleAlert()
              : setCartList([...cartList, product]);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
