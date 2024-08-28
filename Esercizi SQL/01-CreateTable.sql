CREATE TABLE Books (
    book_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT NOT NULL,
    published_year INTEGER NOT NULL,
    isbn TEXT(13) NOT NULL UNIQUE,
    price REAL CHECK (price >= 0),
    rating REAL DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
    stock_count INTEGER DEFAULT 0
)