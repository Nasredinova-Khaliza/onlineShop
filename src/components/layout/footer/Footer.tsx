import brandName from "../../../assets/brandName.svg";
import scss from "./Footer.module.scss";
const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<img src={brandName} alt="" />
					</div>
					<div className={scss.P}>
						<div>
							<p>О нас</p>
							<p>Контакты</p>
						</div>
						<div>
							<p>Способы оплаты</p>
							<p>Условия доставки</p>
						</div>
						<div>
							<p>Пользовательское соглашение</p>
							<p>Политика конфиденциальности</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
