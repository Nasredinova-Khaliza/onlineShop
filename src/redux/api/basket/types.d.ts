/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BASKET {
	type GetBasketProductResponse = {
		_id: string;
		product: {
			_id: string;
			productName: string;
			quantity: number;
			price: number | null;
			photoUrl: string;
			__v: number;
		};
	}[];
	type GetBasketProductRequest = void;
	type PostBasketProductRespose = {
		productName: string;
		quantity: number;
		price: number | null;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];

	type PostBasketProductRequest = string;

	type PatchBasketProductResponse = string;
	type PatchProductRequest = {
		_id: string;
		buyProduct: {
			quantityToDecrease: number;
		};
	};
}
