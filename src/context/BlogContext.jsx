import { createContext, useContext, useRef, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const titleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProducts, setActiveProducts] = useState(null);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState(null);

  // console.log("activeProducts", activeProducts);
  // console.log("isActiveCategory", isActiveCategory);

  return (
    <BlogContext.Provider
      value={{
        titleRef,
        currentIndex,
        setCurrentIndex,
        activeProducts,
        setActiveProducts,
        isActiveCategory,
        setIsActiveCategory,
        blogCategoryId,
        setBlogCategoryId,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
