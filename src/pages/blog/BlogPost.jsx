import { Link, useNavigate, useParams } from "react-router-dom";
import { blogCategories, admins } from "../../data/data";
import { blogPosts } from "../../data/blogPosts";
import { useEffect } from "react";
import { clockIcon } from "../../components/Icons";
import { useBlog } from "../../context/BlogContext";

const parseTemplate = (template, data) => {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    const value = key.trim();
    if (value.includes("[")) {
      // Handle array access like images[0]
      const [arrayName, index] = value.replace("]", "").split("[");
      return data[arrayName] ? data[arrayName][index] : "";
    }
    return data[value] || "";
  });
};

export const BlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentIndex, setCurrentIndex } = useBlog();

  // Sorting blog post, latest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.postDate) - new Date(a.postDate)
  );

  // Finding single blog post and index
  // Then setting currentIndex
  const singleBlogPostIndex = sortedPosts.findIndex((post) => post.id === id);
  const singleBlogPost = sortedPosts[singleBlogPostIndex];

  useEffect(() => {
    if (singleBlogPostIndex !== -1) {
      setCurrentIndex(singleBlogPostIndex);
    }
  }, [singleBlogPostIndex]);

  // Setting a current post so that we can slide previous and next
  const currentPost = sortedPosts[currentIndex];

  // Finding category name
  const findCategory = blogCategories.find(
    (category) => category.id === singleBlogPost.postCategoryId
  );
  const categoryName = findCategory ? findCategory.name : "No category found";

  // Finding author
  const author = admins.find(
    (admin) => admin.id === singleBlogPost.postAuthorId
  );
  const authorThumb = author ? author.thumb : "No thumb";
  const authorFullName = author ? author.fullName : "No full name";

  // Formatting post date
  const date = new Date(singleBlogPost.postDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(`/blog/${sortedPosts[newIndex].id}`);
    }
  };

  // const handlePrevious = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevIndex) => prevIndex - 1);
  //     navigate(`/blog/${currentPost.id}`);
  //   }
  // };

  const handleNext = () => {
    if (currentIndex < sortedPosts.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(`/blog/${sortedPosts[newIndex].id}`);
    }
  };

  // const handleNext = () => {
  //   if (currentIndex < sortedPosts.length - 1) {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //     navigate(`/blog/${currentPost.id}`);
  //   }
  // };

  // console.log("singleBlogPost", singleBlogPost);
  // console.log("singleBlogPostIndex", singleBlogPostIndex);
  // console.log("currentIndex", currentIndex);
  // console.log("currentPost", currentPost);

  return (
    <div className="article">
      <div className="article__container">
        <div className="article__category">
          <p className="article__category-heading">{categoryName}</p>
        </div>
        <div className="article__content">
          <div className="article__content-heading">
            <h1 className="article__content-title">{currentPost.postTitle}</h1>
          </div>
          <div className="article__content-label">
            <div className="article__content-author">
              <div className="article__author">
                <img
                  src={authorThumb}
                  alt={authorFullName}
                  className="article__author-image"
                />
                &nbsp;By&nbsp;
                <span className="article__author-name">{authorFullName}</span>
              </div>
            </div>
            <div className="article__content-date">
              <div className="article__content-date-icon">{clockIcon}</div>
              <p className="article__content-date-paragraph">{formattedDate}</p>
            </div>
          </div>
          {/* Article main goes here */}
          <div
            dangerouslySetInnerHTML={{
              __html: parseTemplate(currentPost.postHtml, currentPost),
            }}
          ></div>
          <div className="article__left-right-buttons">
            <button
              className="btn__left-right-buttons"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <span
                className={`${
                  currentIndex === 0 ? "" : "btn__left-right-buttons-width"
                }`}
              >
                {currentIndex === 0
                  ? ""
                  : `${sortedPosts[currentIndex - 1].postTitle}`}
              </span>

              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_16)">
                  <path d="M143 46.45L89.8448 100L143 153.55L126.636 170L57 100L126.636 30L143 46.45Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1_16">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              className="btn__left-right-buttons"
              onClick={handleNext}
              disabled={currentIndex === sortedPosts.length - 1}
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M57 153.55L110.155 100L57 46.45L73.3644 30L143 100L73.3644 170L57 153.55Z" />
              </svg>
              <span
                className={`${
                  currentIndex === sortedPosts.length - 1
                    ? ""
                    : "btn__left-right-buttons-width"
                }`}
              >
                {currentIndex === sortedPosts.length - 1
                  ? ""
                  : `${sortedPosts[currentIndex + 1].postTitle}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
