/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../../redux/api/users/usersApi";
import { Field, Form, Formik } from "formik";
import { resistrationSchema } from "../../../validation/RegisterValidation";
import styles from "./Registration.module.scss";

const Registration = () => {
	const [postUser] = usePostUserMutation();
	const navigate = useNavigate();

	const handleSubmit = async (values: any) => {
		const { email, password, userName } = values;
		const result = await postUser({ email, password, userName });
		if (result) {
			navigate("/login");
		}
	};

	return (
		<Formik
			initialValues={{ email: "", password: "", userName: "" }}
			onSubmit={handleSubmit}
			validationSchema={resistrationSchema}>
			{({ errors, touched }) => (
				<Form className={styles.form}>
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
					<label htmlFor="userName" className={styles.label}>
						Username
					</label>
					<Field
						id="userName"
						name="userName"
						type="text"
						placeholder="Username"
						className={styles.input}
					/>
					{touched.userName && errors.userName && (
						<div className={styles.error}>{errors.userName}</div>
					)}
					<Link to="/login" className={styles.link}>
						Есть фккаунт? Войти
					</Link>
					<button type="submit" className={styles.button}>
						Зарегистрироваться
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default Registration;
