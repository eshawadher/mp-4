//import {Author} from "next/dist/lib/metadata/types/metadata-types";
export type Author = {
    id: string;
    name: string;
};

export type BookTypes={
    id:number;
    title:string;
    image:string;
    authors: Author[];
}

export type Response = {
    availableBooks: number;
    books: BookTypes[];
}
