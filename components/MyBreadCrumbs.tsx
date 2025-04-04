"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BreadcrumbItem {
  _key: string;
  title: string;
  slug: string;
}

interface BreadcrumbsProps {
  value?: BreadcrumbItem[];
}

export default function MyBreadCrumbs({ value }: BreadcrumbsProps) {
  const [queryParams, setQueryParams] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQueryParams(window.location.search);
    }
  }, []);

  const appendQueryParams = (url: string) => {
    return queryParams ? `${url}${queryParams}` : url;
  };

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <Link href={appendQueryParams("/")} className="hover:text-blue-500">
        Home
      </Link>
      {value.map((item, index) => (
        <div key={item._key || index} className="flex items-center">
          <span className="mx-2">/</span>
          <Link
            href={appendQueryParams(item.url)}
            className="hover:text-blue-500"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
