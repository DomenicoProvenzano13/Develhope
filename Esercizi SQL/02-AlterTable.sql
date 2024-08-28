ALTER TABLE Books
ADD COLUMN publisher TEXT,
ADD COLUMN number_pages INTEGER CHECK(number_pages > 0);