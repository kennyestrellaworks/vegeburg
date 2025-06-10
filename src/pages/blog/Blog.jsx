import { blogPosts } from "../../data/blogPosts";
import { clockIcon } from "../../components/Icons";
import { admins, blogCategories } from "../../data/data";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Blog = () => {
  const { activeProducts, isActiveCategory, titleRef } = useBlog();
  const [slideFrom, setSlideFrom] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    if (titleRef?.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  // Sorting, latest date first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.postDate) - new Date(a.postDate)
  );

  const charLimit = 200;
  const renderBlogPost = isActiveCategory ? activeProducts : sortedPosts;

  const getFirstParagraph = (post) => {
    // Replace image placeholders with actual values
    let postHtml = post.postHtml;

    // Now parse the HTML and extract the first paragraph
    const parser = new DOMParser();
    const doc = parser.parseFromString(postHtml, "text/html");
    const firstParagraph = doc.querySelector(".article__paragraph");
    const text = firstParagraph.textContent;

    return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  };

  const postsPerPage = 10;
  const maxVisiblePages = 6;

  const totalPages = Math.ceil(renderBlogPost.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = renderBlogPost.slice(indexOfFirstPost, indexOfLastPost);

  // console.log("renderBlogPost", renderBlogPost);
  // console.log("currentPosts", currentPosts);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (pageNumber) => {
    if (pageNumber > currentPage) {
      setSlideFrom("left");
    } else if (pageNumber < currentPage) {
      setSlideFrom("right");
    }
    setSearchParams({ page: pageNumber });
    scrollToTop();
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSlideFrom("left");
      setSearchParams({ page: currentPage + 1 });
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setSlideFrom("right");
      setSearchParams({ page: currentPage - 1 });
      scrollToTop();
    }
  };

  // Calculate which pages to show
  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    // Adjust if endPage goes beyond totalPages
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <div className="section-how-to__header">
        <h1 className="heading__secondary">Welcome to our Blog!</h1>
        <p className="article__paragraph">
          Stay updated with the latest insights, tips, and stories from our
          team. Whether you're looking for practical advice, creative
          inspiration, or in-depth how-tos, we've got something for everyone.
          Scroll through our recent posts below — and when something catches
          your eye, click Read More to dive in!
        </p>
      </div>
      <div className="blog-list blog-list-v2">
        {currentPosts.map((post, index) => {
          // Finding category name
          const findCategory = blogCategories.find(
            (category) => category.id === post.postCategoryId
          );
          const categoryName = findCategory
            ? findCategory.name
            : "No category found";

          // Finding author
          const author = admins.find((admin) => admin.id === post.postAuthorId);
          const authorThumb = author ? author.thumb : "No thumb";
          const authorFullName = author ? author.fullName : "No full name";

          // Formatting post date
          const date = new Date(post.postDate);
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);

          //   console.log("categoryName", categoryName);
          //   console.log("authorThumb", authorThumb);
          //   console.log("authorFullName", authorFullName);
          //   console.log("formattedDate", formattedDate);

          return (
            <div
              key={index}
              className={`blog-list-v2__item ${
                slideFrom === "left"
                  ? "slide-in-left"
                  : slideFrom === "right"
                  ? "slide-in-right"
                  : ""
              }`}
            >
              <img
                src={`/src/assets/images/${post.postImages[0]}.jpg`}
                alt={`${post.postImages[0]}`}
                className="blog-list__image"
              />
              <div className="article__category">
                <p className="article__category-heading">{categoryName}</p>
              </div>
              <h2 className="blog-list__heading">{post.postTitle}</h2>
              <div className="blog-list__details">
                <div className="article__author">
                  <img
                    src={authorThumb}
                    alt={authorThumb}
                    className="article__author-image"
                  />
                  &nbsp;By&nbsp;
                  <span className="article__author-name">{authorFullName}</span>
                </div>
                <div className="blog-list__date article__content-date">
                  <div className="article__content-date-icon">{clockIcon}</div>

                  <p className="article__content-date-paragraph">
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div className="blog-list-v2__paragraph">
                <p className="article__paragraph">{getFirstParagraph(post)}</p>
              </div>
              <div className="blog-list-v2__buttons">
                <Link className="blog-list-v2__button" to={`${post.id}`}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {renderBlogPost.length > postsPerPage && (
        <div className="pagination">
          <div className="pagination__buttons">
            <button
              className="pagination__button"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </div>

          <div className="pagination__page-numbers">
            {getPageNumbers().map((number) => (
              <button
                key={number}
                className="pagination__page-button"
                disabled={currentPage === number}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="pagination__buttons">
            <button
              className="pagination__button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
