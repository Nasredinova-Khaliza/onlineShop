/* eslint-disable @typescript-eslint/no-unused-vars */
import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasketProduct: build.query<
			BASKET.GetBasketProductResponse,
			BASKET.GetBasketProductRequest
		>({
			query: (_id) => ({
				url: "basket",
				method: "GET",
			}),
			providesTags: ["basket"],
		}),

		postBasketProduct: build.mutation<
			BASKET.PostBasketProductRespose,
			BASKET.PostBasketProductRequest
		>({
			query: (id) => ({
				url: `basket/${id}`,
				method: "POST",
			}),
			invalidatesTags: ["basket"],
		}),
		patchProduct: build.mutation<
			BASKET.PatchBasketProductResponse,
			BASKET.PatchProductRequest
		>({
			query: ({ buyProduct, _id }) => ({
				url: `/product-buy/${_id}`,
				method: "PATCH",
				body: buyProduct,
			}),
			invalidatesTags: ["basket"],
		}),
	}),
});
export const {
	useGetBasketProductQuery,
	usePostBasketProductMutation,
	usePatchProductMutation,
} = api;
