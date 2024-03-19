/* eslint-disable @typescript-eslint/no-unused-vars */
import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFavoriteProduct: build.query<
			FAVORITEPRODUCTS.GetFavoriteProductsResponse,
			FAVORITEPRODUCTS.GetFavoriteProductsRequest
		>({
			query: () => ({
				url: "favorites-products",
				method: "GET",
			}),
			providesTags: ["products"],
		}),

		postFavoriteProduct: build.mutation<
			FAVORITEPRODUCTS.PostFavoriteProductResponse,
			FAVORITEPRODUCTS.PostFavoriteProductRequest
		>({
			query: (_id) => ({
				url: `favorites-products/${_id}`,
				method: "POST",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});
export const { useGetFavoriteProductQuery, usePostFavoriteProductMutation } =
	api;
