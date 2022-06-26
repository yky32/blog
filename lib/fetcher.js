/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';

var baseURL
if (process.env.API_URL) {
    baseURL = process.env.API_URL
} else {
    baseURL = 'http://localhost:3000/'
}

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    console.log("baseURL=", baseURL, "endpoint=", endpoint)
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}