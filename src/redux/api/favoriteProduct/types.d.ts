/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsResponse = {
		_id: string;
		product: {
			_id: string;
			productName: string;
			quantity: number;
			price: number;
			photoUrl: string;
			__v: number;
		};
	}[];
	type GetFavoriteProductsRequest = void;

	type PostFavoriteProductResponse = {
		productName: string;
		quantity: number;
		price: number;
		photoUrl: string;
		_id: string;
		__v: number;
	}[];
	type PostFavoriteProductRequest = string;
}
