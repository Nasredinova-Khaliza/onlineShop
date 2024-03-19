import { useNavigate } from "react-router-dom";
import { useGetFavoriteProductQuery } from "../../../redux/api/favoriteProduct/FavoriteProductsApi";
import scss from "./FavoriteProducts.module.scss";

const FavoriteProducts = () => {
	const navigate = useNavigate();
	const { data: getFavoriteProduct = [] } = useGetFavoriteProductQuery();
	console.log(getFavoriteProduct);

	const handleToHome = () => {
		navigate("/");
	};

	return (
		<div className={scss.FavoriteProduct}>
			<div className="container">
				<button className={scss.buttonToHome} onClick={handleToHome}>
					назад
				</button>
				<div className={scss.cards}>
					{getFavoriteProduct &&
						getFavoriteProduct.map((item) => (
							<div className={scss.product} key={item.product?._id}>
								{item.product && (
									<>
										<img
											src={item.product.photoUrl}
											alt={item.product.productName}
											className={scss.image}
										/>
										<div>
											<h3>{item.product.productName}</h3>
											<p>KGS: {item.product.price}</p>
											<p>Quantity: {item.product.quantity}</p>
										</div>
										<button>Купить</button>
									</>
								)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default FavoriteProducts;
