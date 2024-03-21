import { useNavigate } from "react-router-dom";
import {
	useGetBasketProductQuery,
	usePatchProductMutation,
} from "../../../redux/api/basket/BasketApi";
import styles from "./Basket.module.scss";

const Basket = () => {
	const navigate = useNavigate();
	const [patchProduct] = usePatchProductMutation();

	const { data, isLoading, isError } = useGetBasketProductQuery();
	console.log(data);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error occurred while fetching basket products</div>;
	}

	const handleBuyProduct = async (_id: string) => {
		const buyProduct = {
			quantityToDecrease: 3,
		};
		await patchProduct({ buyProduct, _id });
	};

	const handleToHome = () => {
		navigate("/");
	};
	return (
		<div className={styles.Basket}>
			<div className="container">
				<button className={styles.buttonToHome} onClick={handleToHome}>
					назад
				</button>
				<div className={styles.cards}>
					{data?.map((item) => (
						<div className={styles.product} key={item.product?._id}>
							{item.product && (
								<>
									<img
										src={item.product.photoUrl}
										alt={item.product.productName}
										className={styles.image}
									/>
									<div>
										<h3>{item.product.productName}</h3>
										<p>KGS: {item.product.price}</p>
										<p>Quantity: {item.product.quantity}</p>
									</div>
									<button onClick={() => handleBuyProduct(item.product._id)}>
										Купить
									</button>
								</>
							)}
							{/* <button onClick={() => handleBuyProduct(item.product._id)}>
								Купить
							</button> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Basket;
