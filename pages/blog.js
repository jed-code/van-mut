import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import { urlFor } from "../lib/sanity";
import { useFetch } from "../lib/useFetch";
import { blogPost } from "../lib/queries";
import { dateFunc } from "../lib/dateFunc";

const Blog = () => {
  const {
    data: getAllPost,
    error: errorAllPosts,
    isLoading: isLoadingAllPost,
  } = useFetch(["allPost"], blogPost);

  // console.log("getAllPost....", getAllPost);

  return (
    <Layout>
      <PageBanner pageName={"Blog"} />
      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center blog-grid">
            {getAllPost?.map((item, i) => {
              const { jour, mois } = dateFunc(item?.date);
              console.log("item...", item);
              return (
                <div className="col-xl-4 col-md-6" key={i}>
                  <div className="news-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src={urlFor(item?.image)?.url()} alt="News" />
                      <span className="date">
                        <b> {jour}</b> {mois}
                      </span>
                    </div>
                    <div className="content">
                      {/* <span className="sub-title">Vegetable</span> */}
                      <h4>
                        <Link href="/blog-details">{item?.title}</Link>
                      </h4>
                      <Link href="/blog-details">
                        <div className="read-more">
                          Voir Plus <i className="fas fa-angle-double-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul> */}
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="leaf-left"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="litchi"
            src="assets/images/shapes/litchi.png"
            alt="Litchi"
          />
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
