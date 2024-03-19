import * as Yup from "yup";

export const loginSchema = Yup.object({
	email: Yup.string()
		.email("Не корректный email")
		.required("Обязательное поле"),
	password: Yup.string()
		.min(6, "Пароль должен содержать минимум 6 символов")
		.required("Обязательное поле"),
});
