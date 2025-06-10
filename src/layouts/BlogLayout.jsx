import { Link, Outlet, useSearchParams } from "react-router-dom";
import { blogCategories, admins } from "../data/data";
import { blogPosts } from "../data/blogPosts";
import { collapseIcon, clockIcon, closeIcon } from "../components/Icons";
import { useBlog } from "../context/BlogContext";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../context/WindowWidthContext";

export const BlogLayout = () => {
  const windowWidth = useWindowWidth();
  const {
    titleRef,
    currentIndex,
    setActiveProducts,
    setIsActiveCategory,
    setBlogCategoryId,
  } = useBlog();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPopularPosts, setShowPopularPosts] = useState(true);
  const [showRecentPosts, setShowRecentPosts] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  // When the component is rendered we always scroll up
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({
        block: "start",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (windowWidth >= 880) {
      setOpenSidebar(false);
    }
  }, [windowWidth]);

  // Getting id in the browser url
  // /blog?blog-category=1293547mcnzxei we get 1293547mcnzxei
  const blogCategoryId = searchParams.get("blog-category");

  // We check if there's blogCategoryId,
  // IF TRUE, we filter the post from
  // blogPosts where its postCategoryId is equal to blogCategoryId
  // IF FALSE, we return the blogPosts
  const blogPostToRender = blogCategoryId
    ? blogPosts.filter((post) => post.postCategoryId === blogCategoryId)
    : blogPosts;

  // During page refresh, we need to check if a category is active or not then
  // update some states within our useBlog
  useEffect(() => {
    setActiveProducts(blogPostToRender);

    const isActive = blogCategories.some(
      (category) => category.id === blogCategoryId
    );
    setIsActiveCategory(isActive);
    setBlogCategoryId(blogCategoryId);
  }, [blogCategoryId, blogPosts]);

  const handleArchivePosts = () => {
    setShowPopularPosts(!showPopularPosts);
    setShowRecentPosts(!showRecentPosts);
  };

  // Posts to display: sorted by date if Latest (default), by viewCount if Most Viewed
  let postsToShow = [];

  if (showPopularPosts === true) {
    postsToShow = [...blogPosts]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 3);
  }

  if (showRecentPosts === true) {
    // Sorting, latest date first
    postsToShow = [...blogPosts]
      .sort((a, b) => new Date(b.postDate) - new Date(a.postDate))
      .slice(0, 3);
  }

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <section className="wrapper" ref={titleRef}>
      <div className="wrapper__1920 blog">
        <div className="wrapper__1920--content">
          <div className="blog__container">
            <div className="blog__content">
              <Outlet />
            </div>
            <div className="blog__sidebar">
              <button
                onClick={handleOpenSidebar}
                className="blog__sidebar-collapse-button"
              >
                {openSidebar ? closeIcon : collapseIcon}
              </button>
              <div
                className={`blog__sidebar-content ${
                  openSidebar ? "blog__sidebar-content-expand" : ""
                }`}
              >
                <div className="blog__categories">
                  <h3 className="blog__categories-heading">Categories</h3>
                  <div className="blog__categories-item">
                    {blogCategories.map((category, index) => {
                      const isActive = category.id === blogCategoryId;
                      return (
                        <Link
                          to={`/blog?blog-category=${category.id}`}
                          key={index}
                          className={`blog__category ${
                            isActive ? "active" : ""
                          }`}
                        >
                          {category.name}
                        </Link>
                      );
                    })}
                    {blogCategoryId && (
                      <Link to={"/blog"} className="blog__category-clear">
                        Clear
                      </Link>
                    )}
                  </div>
                </div>
                <div className="blog__archive">
                  <div className="blog-archive__buttons">
                    <button
                      onClick={handleArchivePosts}
                      className={`blog-archive__button ${
                        showPopularPosts ? "active" : ""
                      }`}
                    >
                      Popular
                    </button>
                    <button
                      onClick={handleArchivePosts}
                      className={`blog-archive__button ${
                        showRecentPosts ? "active" : ""
                      }`}
                    >
                      Recent
                    </button>
                  </div>
                  <div className="blog-list">
                    {postsToShow.map((post, index) => {
                      // Finding author
                      const author = admins.find(
                        (admin) => admin.id === post.postAuthorId
                      );
                      const authorThumb = author ? author.thumb : "No thumb";
                      const authorFullName = author
                        ? author.fullName
                        : "No full name";

                      // Formatting post date
                      const date = new Date(post.postDate);
                      const options = {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      };
                      const formattedDate = date.toLocaleDateString(
                        "en-US",
                        options
                      );
                      return (
                        <div key={index} className="blog-list__item">
                          <img
                            src={`/images/${post.postImages[0]}.jpg`}
                            alt={`${post.postImages[0]}`}
                            className="blog-list__image"
                          />
                          <h2 className="blog-list__heading">
                            {post.postTitle}
                          </h2>
                          <div className="blog-list__details">
                            <div className="article__author">
                              <img
                                src={authorThumb}
                                alt={authorThumb}
                                className="article__author-image"
                              />
                              &nbsp;By&nbsp;
                              <span className="article__author-name">
                                {authorFullName}
                              </span>
                            </div>
                            <div className="blog-list__date article__content-date">
                              <div className="article__content-date-icon">
                                {clockIcon}
                              </div>
                              <p className="article__content-date-paragraph">
                                {formattedDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
