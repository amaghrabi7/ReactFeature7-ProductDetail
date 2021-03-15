// Styling
import { ProductWrapper } from "../styles";
import { DeleteButtonStyled } from "../styles";
import deleteProduct from "../App";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
