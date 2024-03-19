/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { loginSchema } from "../../../validation/LoginValidation";
import { useLoginMutation } from "../../../redux/api/login/loginApi";
import styles from "./Login.module.scss";
const LoginPage = () => {
	const navigate = useNavigate();
	const [login] = useLoginMutation();
	const handleLogin = async (values: any) => {
		const newData = {
			email: values.email,
			password: values.password,
		};
		const result = await login(newData);
		if ("data" in result) {
			const { token } = result.data;
			localStorage.setItem("token", token);
			localStorage.setItem("isAuth", "true");
			navigate("/");
		}
	};
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={handleLogin}
			validationSchema={loginSchema}>
			{({ errors, touched }) => (
				<Form className={styles.form}>
					<div className={styles.container}>
						<div className={styles.content}>
							<label htmlFor="email" className={styles.label}>
								Email
							</label>
							<Field
								id="email"
								name="email"
								type="email"
								placeholder="Email"
								className={styles.input}
							/>
							{touched.email && errors.email && (
								<div className={styles.error}>{errors.email}</div>
							)}
							<label htmlFor="password" className={styles.label}>
								Password
							</label>
							<Field
								id="password"
								name="password"
								type="password"
								placeholder="Password"
								className={styles.input}
							/>
							{touched.password && errors.password && (
								<div className={styles.error}>{errors.password}</div>
							)}
							<Link to="/register" className={styles.link}>
								Нет аккаунта? Зарегистрируйтесь
							</Link>
							<button type="submit" className={styles.button}>
								Войти
							</button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
export default LoginPage;
