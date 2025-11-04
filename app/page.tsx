import getData from "@/lib/getData";
import {BookTypes} from "@/types/BookTypes";
import Link from "next/link";
import React from "react";


export default async function Home() {

    const data = await getData();
    const books = Array.isArray(data.books) ? data.books.flat() : [];

    if (!data.ok) {
        return (
            <main style={{ padding: 24, background: "#fdecec", minHeight: "100vh" }}>
                <h2>Books</h2>
                <p style={{ color: "red" }}>{data.message}</p>
                <button onClick={() => location.reload()}>Try Again</button>
            </main>
        );
    }
    return (
        <>
            <header style={{
                width: "100%",
                backgroundColor: "white",
                padding: "16px 32px",
            }}>
                <Link href="/about"
                      style={{
                          color: "#F3D0D7",
                          textDecoration: "none",
                          fontFamily: "Monospace, Monaco",
                          fontWeight: 800,
                          fontSize: 28
                      }}>
                    Book Explorer
                </Link>
            </header>
            <main style=
                      {{
                          padding: "24px",
                          backgroundColor: "#fdecec",
                          minHeight: "100vh"
                      }}>
                <h2 style=
                        {{
                            fontFamily: "Monospace, Monaco",
                            fontSize: 24,
                            fontWeight: 700,
                            marginBottom: 16,
                            color: "#E6A4B4",
                        }}>
                    Books
                </h2>
                <div style=
                         {{
                             display: "grid",
                             gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                             gap: "20px",
                             paddingBottom: "20px"
                         }}>
                    {books.map((book: BookTypes) => (
                        <div key={book.id} style=
                            {{
                                flex: "0 0 auto",
                                textAlign: "center"
                            }}>
                            <img
                                src={book.image}
                                alt={book.title}
                                style={{
                                    width: "180px",
                                    height: "270px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    backgroundColor: "#f6f6f6",
                                }}
                            />
                            <h3 style={{fontSize: "16px",color: "#E6A4B4",fontFamily: "Monospace, Monaco", fontWeight: 600, margin: 0}}>
                                {book.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </main>
        </>
    );
}

