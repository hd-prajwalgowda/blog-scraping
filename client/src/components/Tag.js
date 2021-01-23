import React from "react";

const Tag = ({ tag, size = "xs" }) => {
  return (
    <a
      className={`mr-1 mb-1 px-1 py-1 bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-100 text-${size} rounded hover:bg-gray-100 dark:hover:bg-gray-800`}
      href={tag}
    >
      #{tag}
    </a>
  );
};

export default Tag;
