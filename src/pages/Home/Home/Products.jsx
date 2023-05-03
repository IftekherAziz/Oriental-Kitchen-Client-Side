import React from "react";

const products = [
  {
    id: 1,
    name: "Sub Burger",
    href: "#",
    price: "$48",
    imageSrc: "https://i.ibb.co/rsSRNMD/gallery-1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Chicken Humburger",
    href: "#",
    price: "$35",
    imageSrc: "https://i.ibb.co/wzcZDBb/gallery-2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Beef Pizza",
    href: "#",
    price: "$89",
    imageSrc: "https://i.ibb.co/h2VZ753/gallery-3.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Sub Sandwich",
    href: "#",
    price: "$35",
    imageSrc: "https://i.ibb.co/9tkGvXr/gallery-4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const Products = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 mb-8 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-1xl md:text-3xl">
            <span className="underline decoration-base-200 text-3xl md:text-4xl pl-1 md:pl-2 font-bold">
              Best Selling
            </span>
            <span className="text-3xl md:text-4xl font-bold text-blue-700">
              {" "}
              Food
            </span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold mb-5 text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>

              <button
                type="button"
                className="py-2 px-4 btn btn-primary text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
