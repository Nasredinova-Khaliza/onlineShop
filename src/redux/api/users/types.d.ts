export namespace USER {
	export type PostUserResponse = {
		email: string;
		password: string;
		userName: string;
	};
	export type PostUserRequest = {
		email: string;
		password: string;
		userName: string;
	};
}
