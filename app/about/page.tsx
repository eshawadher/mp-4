import getData from "@/lib/getData";
import {BookTypes} from "@/types/BookTypes";
import Link from "next/link";

export default async function AboutPage() {
    const data = await getData();
    const books = Array.isArray(data.books) ? data.books.flat() : [];

    // Hardcoded descriptions
    const bookDescriptions: Record<string, string> = {
        "Journey to Hogwarts": "A magical introduction to the world of Harry Potter and his first steps into Hogwarts.",
        "Inside Hogwarts": "Explore the mysterious castle, its enchanted halls, and the professors who shape young wizards.",
        "Harry Potter and the Goblet of Fire": "Harry faces dangerous trials and dark magic as the Triwizard Tournament begins.",
        "Harry Potter and the Order of the Phoenix": "As Voldemort returns, Harry must confront both enemies and disbelief.",
        "The Hobbit": "Bilbo Baggins is swept into an epic adventure across Middle-earth to reclaim treasure from a dragon.",
        "The Fellowship of the Ring": "Nine companions set out to destroy the One Ring and defeat Sauron.",
        "The Name of the Wind": "A gifted young man grows into a legend through music, magic, and mystery.",
        "Two Towers : The Lord of the Rings": "The Fellowship is broken but continues its fight against the shadow of Mordor.",
        "Frankenstein (Silver Screen Edition)": "A haunting story about ambition, creation, and the boundaries of humanity.",
        "Great Gatsby (Silver Screen Edition)": "A dazzling portrayal of wealth, love, and loss in the roaring twenties.",
    };


    return (
        <>
            <header style={{
                width: "100%",
                backgroundColor: "white",
                padding: "16px 32px",
            }}>
                <Link href="/"
                      style={{
                          color: "#F3D0D7",
                          textDecoration: "none",
                          fontWeight: 800,
                          fontSize: 28,
                          fontFamily: "Monospace, Monaco",
                      }}>
                    Book Explorer
                </Link>
            </header>
            <main
                style={{
                    padding: "24px",
                    backgroundColor: "#fdecec",
                    minHeight: "100vh",
                }}>

                <h2
                    style={{
                        fontSize: 24,
                        fontWeight: 700,
                        marginBottom: 16,
                        fontFamily: "Monospace, Monaco",
                        color: "#E6A4B4",
                    }}>
                    About Each Book!
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "20px",
                        paddingBottom: "20px",
                    }}
                >
                    {books.map((book: BookTypes) => {
                        // 🧠 Pick the matching description (or show a default)
                        const description = bookDescriptions[book.title] || "No description available for this book.";

                        return (
                            <div
                                key={book.id}
                                style={{
                                    flex: "0 0 auto",
                                    textAlign: "center",
                                }}
                            >
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    style={{
                                        width: "180px",
                                        height: "270px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        backgroundColor: "#f6f6f6"
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        fontFamily: "Monospace, Monaco",
                                        margin: 0,
                                        color: "#E6A4B4",
                                    }}
                                >
                                    {book.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "13px",
                                        fontFamily: "Monospace, Monaco",
                                        color: "#D988B9",
                                        maxWidth: 220,
                                        margin: "6px auto",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}
