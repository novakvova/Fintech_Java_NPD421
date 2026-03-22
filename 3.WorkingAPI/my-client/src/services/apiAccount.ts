import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utilities/createBaseQuery.ts";
import type {IRegister} from "./types.ts";
import {serialize} from "object-to-formdata";

export const apiAccount = createApi({
    reducerPath: "account",
    baseQuery: createBaseQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<void, IRegister>({
            query: (body) => {
                return {
                    url: 'register',
                    method: 'POST',
                    body: serialize(body)
                }
            }
        })
    }),
});

export const {
    useRegisterMutation
} = apiAccount;