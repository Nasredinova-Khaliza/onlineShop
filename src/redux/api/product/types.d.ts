/* eslint-disable */
namespace PRODUCT {
	type GetProductsResponse = {
		id: Key | null | undefined;
		isFavorite: boolean;
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type GetProductsRequest = void;

	type GetProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type GetProductRequest = string;

	type PostProductResponse = {
		isFavorite: boolean;
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type PostProductRequest = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
	};

	type DeleteProductResponse = {
		productName: string;
		quantity: number | null;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	};
	type DeleteProductRequest = string;

	type PutProductResponse = {
		_id: string;
		newData: {
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
			_id: string;
		};
	};

	type PutProductRequest = {
		_id: string;
		newData: {
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
			_id: string;
		};
	};
}
