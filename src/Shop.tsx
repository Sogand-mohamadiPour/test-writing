import { useState } from "react";

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Keyboard", price: 80 },
    { id: 3, name: "Mouse", price: 40 },
];


function Shop() {
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState<typeof products>([]);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    function addToCart(product: (typeof products)[number]) {
        setCart((currentCart) => [...currentCart, product]);
    }
    return (
        <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900 ">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-8 text-4xl font-bold">Shop</h1>

                <div className="mb-8">
                    <label
                        htmlFor="search"
                        className="mb-2 block text-sm font-medium"
                    >
                        Search products
                    </label>

                    <input
                        id="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search..."
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div className="mb-8 rounded-lg bg-white p-4 shadow-sm">
                    <p className="font-semibold">
                        Cart: {cart.length}
                    </p>
                </div>

                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <article
                            key={product.id}
                            className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h2 className="mb-2 text-xl font-semibold">
                                {product.name}
                            </h2>

                            <p className="mb-5 text-gray-600">
                                ${product.price}
                            </p>

                            <button
                                onClick={() => addToCart(product)}
                                className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95 cursor-pointer"
                            >
                                Add to cart
                            </button>
                        </article>
                    ))}
                </section>

                <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-2xl font-bold">
                        Cart
                    </h2>

                    {cart.length === 0 ? (
                        <p className="text-gray-500">
                            Your cart is empty.
                        </p>
                    ) : (
                        <div className="space-y-2">
                            {cart.map((product, index) => (
                                <p
                                    key={`${product.id}-${index}`}
                                    className="rounded-lg bg-gray-100 px-4 py-3"
                                >
                                    {product.name}
                                </p>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}

export default Shop
