"use server";
const API_KEY = process.env.API_KEY;

export default async function getData() {
    const url = "https://api.bigbookapi.com/search-books?query=books+about+wizards";

    try {
        const res = await fetch(url, {
            // need this for my specific api
            headers: { "x-api-key": API_KEY || "", accept: "application/json" },
            cache: "no-store",
        });

        if (res.status === 402) {
            console.log(res.statusText);
            return { ok: false, message: "Daily API Limit Reached. Try Again Later." };
        }

        if (!res.ok) {
            return { ok: false, message: "The Book API is Unavailable. Please Retry Soon." };
        }
        const data = await res.json();
        const books = data?.books ?? [];
        return { ok: true, books };
    } catch (error) {
        console.log(error);
        return {
            ok: false, message: "Network Error. Please Check Your Connection." };
    }
}
