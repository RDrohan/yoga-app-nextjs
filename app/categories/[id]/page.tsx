"use client";

import { useState, useEffect } from "react";

export default function Category({ params }: { params: { id: string } }) {
  const id = params.id;

  const [category, setCategory] = useState<any>({});
  const [poses, setPoses] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { data: category } = data;
        const { category_name, category_description, poses } = category;
        setCategory({
          category_name,
          category_description,
        });
        setPoses(poses);
      });
  }, []);

  return (
    <section className="my-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-red-500 font-semibold">
          {category.category_name} Poses
        </h1>
        <p className="mt-3 text-gray-500">{category.category_description}</p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {poses.map((pose, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <div className="flex justify-center items-center pt-12">
              <img
                src={pose.url_svg}
                loading="lazy"
                alt={pose.english_name}
                className="w-48 h-48 rounded-full"
              />
            </div>
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div className="ml-3">
                <span className="block text-gray-900">{pose.english_name}</span>
                <span className="block text-gray-400 text-sm">
                  {pose.sanskrit_name_adapted}
                </span>
              </div>
            </div>
            <div className="mt-2 pt-3 ml-4 mr-2">
              <p className="text-justify mx-3 mb-6 text-gray-900">
                {pose.pose_description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
