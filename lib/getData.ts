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

        if (res.status === 429) {
            return { ok: false, message: "Daily API limit reached. Try again later." };
        }

        if (!res.ok) {
            return { ok: false, message: "The book API is unavailable. Please retry soon." };
        }
        const data = await res.json();
        const books = data?.books ?? [];
        return { ok: true, books };
    } catch (error) {
        return {
            ok: false, message: "Network error. Please check your connection." };
    }
}
