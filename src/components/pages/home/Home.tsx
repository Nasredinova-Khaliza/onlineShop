/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	useDeleteProductMutation,
	useGetProductsQuery,
	usePostProductMutation,
	usePutProductMutation,
} from "../../../redux/api/product/productApi";
import scss from "./Home.module.scss";
import Modal from "../../modal/Modal";
import { Link } from "react-router-dom";
import { usePostFavoriteProductMutation } from "../../../redux/api/favoriteProduct/FavoriteProductsApi";
import { usePostBasketProductMutation } from "../../../redux/api/basket/BasketApi";
import emtyHeart from "../../../assets/emtyHeart.svg";
import greenHeart from "../../../assets/greenHeart.svg";
import edit from "../../../assets/edite.svg";
import delet from "../../../assets/delete.svg";

interface FormValues {
	productName: string;
	quantity: number;
	price: number;
	photoUrl: string;
}

interface ProductsFormModal {
	handleClose: () => void;
}

const Home: React.FC<ProductsFormModal> = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [postFavoriteProduct] = usePostFavoriteProductMutation();
	const [postBasketProduct] = usePostBasketProductMutation();
	const [putProduct] = usePutProductMutation();
	const [postProduct] = usePostProductMutation();
	const { data: products = [] } = useGetProductsQuery();
	const [deleteProduct] = useDeleteProductMutation();
	const [productEditId, setProductEditId] = useState<null | string>(null);
	const [editProductName, setEditProductName] = useState("");
	const [editPhotoUrl, setEditPhotoUrl] = useState("");
	const [editQuantity, setEditQuantity] = useState(0);
	const [editPrice, setEditPrice] = useState(0);
	console.log(products);

	const [, setIsHeart] = useState(false);
	const [itemHeart, setItemHeart] = useState<null | string>(null);

	const formik = useFormik<FormValues>({
		initialValues: {
			productName: "",
			quantity: 0,
			price: 0,
			photoUrl: "",
		},

		validationSchema: Yup.object({
			productName: Yup.string().required("Обязательное поле"),
			quantity: Yup.number()
				.required("Обязательное поле")
				.positive("Должно быть положительным числом"),
			price: Yup.number()
				.required("Обязательное поле")
				.positive("Должно быть положительным числом"),
			photoUrl: Yup.string().required("Обязательное поле"),
		}),
		onSubmit: async (values: any, { resetForm }) => {
			const newProduct = {
				productName: values.productName,
				quantity: values.quantity,
				price: values.price,
				photoUrl: values.photoUrl,
			};

			await postProduct(newProduct);
			resetForm();
			setModalIsOpen(false);
		},
	});

	const deleteProductId = async (_id: string) => {
		await deleteProduct(_id);
	};

	const addFavoriteProducts = async (_id: string) => {
		await postFavoriteProduct(_id);
		setIsHeart(true);
		setItemHeart(_id);
	};

	const addProductToBasket = async (_id: string) => {
		await postBasketProduct(_id);
	};

	const saveEdit = (item: any) => {
		setProductEditId(item._id);
		setEditProductName(item.productName);
		setEditPhotoUrl(item.photoUrl);
		setEditQuantity(item.quantity);
		setEditPrice(item.price);
	};

	const editeProduct = async (_id: string) => {
		const newData = {
			_id,
			productName: editProductName,
			quantity: editQuantity,
			price: editPrice,
			photoUrl: editPhotoUrl,
		};
		await putProduct({ newData, _id });
		setProductEditId(null);
	};

	return (
		<div className={scss.HomePage}>
			<div className="container">
				<button
					onClick={() => setModalIsOpen(true)}
					className={scss.openButton}>
					Добавить Продукт
				</button>
				<div className={scss.content}>
					<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
						<form onSubmit={formik.handleSubmit} className={scss.ModalContent}>
							<input
								type="text"
								id="productName"
								name="productName"
								placeholder="Введите название продукта"
								width="300px"
								value={formik.values.productName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.productName && formik.errors.productName && (
								<div style={{ color: "red" }}>{formik.errors.productName}</div>
							)}
							<input
								type="number"
								id="quantity"
								name="quantity"
								placeholder="Введите количество"
								width="300px"
								value={formik.values.quantity}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.quantity && formik.errors.quantity && (
								<div style={{ color: "red" }}>{formik.errors.quantity}</div>
							)}
							<input
								type="number"
								id="price"
								name="price"
								placeholder="Введите цену"
								width="300px"
								value={formik.values.price}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.price && formik.errors.price && (
								<div style={{ color: "red" }}>{formik.errors.price}</div>
							)}
							<input
								type="text"
								id="photoUrl"
								name="photoUrl"
								placeholder="Введите URL изображения продукта"
								width="300px"
								value={formik.values.photoUrl}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.photoUrl && formik.errors.photoUrl && (
								<div style={{ color: "red" }}>{formik.errors.photoUrl}</div>
							)}
							<button type="submit">Добавить</button>
						</form>
					</Modal>

					{products.map((item) => {
						return (
							<div key={item._id} className={scss.Cards}>
								{productEditId === item._id ? (
									<div>
										<input
											type="text"
											id="productName"
											name="productName"
											placeholder="Введите название продукта"
											width="300px"
											value={editProductName}
											onChange={(e) => e.target.value}
										/>

										<input
											type="number"
											id="quantity"
											name="quantity"
											placeholder="Введите количество"
											width="300px"
											value={editQuantity}
											onChange={(e) => setEditQuantity(+e.target.value)}
										/>

										<input
											type="number"
											id="price"
											name="price"
											placeholder="Введите цену"
											width="300px"
											value={editPrice}
											onChange={(e) => setEditPrice(+e.target.value)}
										/>

										<input
											type="text"
											id="photoUrl"
											name="photoUrl"
											placeholder="Введите URL изображения продукта"
											width="300px"
											value={editPhotoUrl}
											onChange={(e) => setEditPhotoUrl(e.target.value)}
										/>

										<button onClick={() => editeProduct(item._id)}>save</button>
										<button onClick={() => setProductEditId(null)}>
											cancel
										</button>
									</div>
								) : (
									<>
										<Link to={`/product/${item._id}`}>
											<img src={item.photoUrl} alt="img" />
											<h3>{item.productName}</h3>
											<p>Количество: {item.quantity}</p>
											<p>KGS: {item.price}</p>
										</Link>
										<div className={scss.handleImg}>
											{itemHeart === item._id || item.isFavorite === true ? (
												<>
													<img
														onClick={() => {
															addFavoriteProducts(item._id);
															setItemHeart(null);
														}}
														src={greenHeart}
														alt=""
													/>
												</>
											) : (
												<>
													<img
														onClick={() => addFavoriteProducts(item._id)}
														src={emtyHeart}
														alt=""
													/>
												</>
											)}

											<img
												onClick={() => {
													setProductEditId(item._id);
													saveEdit(item);
												}}
												src={edit}
												alt="img"
											/>
											<img
												onClick={() => deleteProductId(item._id)}
												src={delet}
												alt=""
											/>
										</div>
										<div className={scss.buttons}>
											<button
												onClick={() => {
													addProductToBasket(item._id);
												}}>
												Добавить в корзину
											</button>
										</div>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
