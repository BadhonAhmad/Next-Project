import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Welcome to Agri Bazaar</h1>
          <p className="mt-2 text-lg">
            Your one-stop marketplace for buying and selling agricultural
            products.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-10">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          <Link href="/sold-products">
            <a className="bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-48 h-48">
              View Sold Products
            </a>
          </Link>

          <Link href="/current-products">
            <a className="bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-48 h-48">
              View Current Products
            </a>
          </Link>

          <Link href="/add-product">
            <a className="bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-48 h-48">
              Add New Product
            </a>
          </Link>

          <Link href="/manage-account">
            <a className="bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 w-48 h-48">
              Manage Account
            </a>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>Contact: info@agribazaar.com | Phone: +123 456 7890</p>
          <p>© 2024 Agri Bazaar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
