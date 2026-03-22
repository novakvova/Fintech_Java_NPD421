import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utilities/createBaseQuery.ts";

export const apiAccount = createApi({
    reducerPath: "account",
    baseQuery: createBaseQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<void, void>({
            query: () => {
                return {
                    url: 'register',
                    method: 'POST'
                }
            }
        })
    }),
});

export const {
    useRegisterMutation
} = apiAccount;