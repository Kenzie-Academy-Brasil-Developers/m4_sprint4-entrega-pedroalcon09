CREATE TABLE IF NOT EXISTS categories(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(128) UNIQUE
);

CREATE TABLE IF NOT EXISTS products(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    price DECIMAL(12,2),
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);









