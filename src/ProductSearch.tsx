import { useState } from "react";

const products = ["Laptop", "Phone", "Backpack"];

export function ProductSearch() {
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product) =>
        product.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-md p-6">
            <h1 className="mb-4 text-2xl font-bold">Products</h1>

            <label
                htmlFor="search"
                className="mb-2 block text-sm font-medium"
            >
                Search
            </label>

            <input
                id="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="mb-6 w-full rounded-lg border px-4 py-2"
                placeholder="Search products..."
            />

            <div className="space-y-2">
                {filteredProducts.map((product) => (
                    <p
                        key={product}
                        className="rounded-lg border p-3"
                    >
                        {product}
                    </p>
                ))}
            </div>
        </div>
    );
}