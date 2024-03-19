import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import FavoriteProductsPage from "../pages/FavoriteProductsPage";
import ProductPage from "../pages/ProductPage";
import RegistrationPage from "../pages/RegistrationPage";
import BasketPage from "../pages/BasketPage";

const Layout = () => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<HomePage
									handleClose={function (): void {
										throw new Error("Function not implemented.");
									}}
								/>
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegistrationPage />} />
						<Route path="/product/:productId" element={<ProductPage />} />
						<Route
							path="/favorites-products"
							element={<FavoriteProductsPage />}
						/>
						<Route path="/basket" element={<BasketPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
