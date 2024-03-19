// import { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/logo.svg";
import save from "../../../assets/save.svg";
import logOut from "../../../assets/logOut.svg";
import basket from "../../../assets/basket.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
	// const [modalIsOpen, setModalIsOpen] = useState(false);
	const navigate = useNavigate();

	// console.log(modalIsOpen);
	const handleLogOut = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	const favoriteProducts = () => {
		navigate("/favorites-products");
	};

	const handleBasketClick = () => {
		navigate("/basket");
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div>
						<img src={logOut} onClick={handleLogOut} alt="logOut" />
						<img src={save} onClick={favoriteProducts} alt="save" />
						<img src={basket} onClick={handleBasketClick} alt="basket" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
