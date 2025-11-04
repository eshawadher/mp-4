"use client";

export default function RetryButton() {
    return (
        <button onClick={() => location.reload()}>
            Try Again
        </button>
    );
}
