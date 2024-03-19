import { api as index } from "..";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => "users",
			providesTags: ["auth"],
		}),
		postUser: builder.mutation({
			query: (newData) => ({
				url: "users",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["auth"],
		}),
		deleteAllUser: builder.mutation({
			query: () => ({
				url: "users",
				method: "DELETE",
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});
export const { useGetUsersQuery, usePostUserMutation } = api;
