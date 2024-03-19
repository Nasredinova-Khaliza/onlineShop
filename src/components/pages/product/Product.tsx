import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../redux/api/product/productApi";
import scss from "./Product.module.scss";

const Product = () => {
	const { productId } = useParams();
	const { data: product, isLoading } = useGetProductQuery(productId!);

	return (
		<div className={scss.Product}>
			<section>
				<div className="container">
					{isLoading ? (
						<p>Загрузка...</p>
					) : product ? (
						<div key={product._id} className={scss.card}>
							<img src={product.photoUrl} alt="img" />
							<h3>{product.productName}</h3>
							<h4>Количество: {product.quantity}</h4>
							<h4>KGS: {product.price}</h4>
							<button>Добавить в корзину</button>
						</div>
					) : (
						<p>Продукт не найден</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default Product;
