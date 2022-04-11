import "./styles.css";

export default function Cart({ cartList, setCartList }) {
  function TotalValue() {
    const resultTotal = cartList.reduce(
      (previusValue, currentValue) => previusValue + Number(currentValue.price),
      0
    );
    return <p>R${resultTotal.toFixed(2).replace(".", ",")}</p>;
  }

  function handleCartFiltered(product) {
    const arrayFiltered = cartList.filter((element) => element !== product);
    setCartList(arrayFiltered);
  }

  return (
    <div className={cartList.length > 0 ? "cart_filled" : "cart_empty"}>
      <div className="cart_header">
        <h3>Carrinho de compras</h3>
      </div>
      <ul className="cart_list">
        {cartList.length > 0 ? (
          cartList.map((product) => {
            return (
              <li className="cart_list_child" key={product.id}>
                <div className="cart_div_img">
                  <img src={product.img} alt="" className="cart_img"></img>
                </div>
                <div className="cart_div_details">
                  <h3 className="cart_product_name">{product.name}</h3>
                  <span className="cart_product_category">
                    {product.category}
                  </span>
                </div>
                <p
                  className="cart_item_remove"
                  onClick={() => {
                    handleCartFiltered(product);
                  }}
                >
                  Remover
                </p>
              </li>
            );
          })
        ) : (
          <div className="cart_emptybag">
            <h3 className="cart_emptybag_header">Sua sacola está vazia</h3>
            <p className="cart_emptybag_p">Adicione itens</p>
          </div>
        )}
      </ul>
      <div
        className={cartList.length > 0 ? "cart_div_filled" : "cart_div_empty"}
      >
        <div className="cart_div_totalValue">
          <p>Total</p>
          <TotalValue></TotalValue>
        </div>
        <button
          className="cart_button_removeAll"
          onClick={() => setCartList([])}
        >
          Remover todos
        </button>
      </div>
    </div>
  );
}
