"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const { data: categories } = data;
        setCategories(categories);
      });
  }, []);

  return (
    <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
      <div>
        <h1 className="text-red-500 text-3xl font-semibold">Categories</h1>
      </div>

      <ul className="mt-12 space-y-6">
        {categories.map((category, idx) => (
          <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
            <Link href="/">
              <div>
                <div className="justify-between sm:flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-red-500">
                      {category.category_name}
                    </h3>
                    <p className="text-gray-500 mt-2 pr-2">
                      {category.category_description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                  <span className="flex items-center text-gray-500">
                    {category.poses.length} Poses
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
