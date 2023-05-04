import React, { useEffect } from "react";
import { useState } from "react";
import BlogPost from "./BlogPost";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blogs = () => {

  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };


  const [blogs, setBlogs] = useState([]);

  const blogLoaders = async () => {
    const res = await fetch(
      "https://b7a10-chef-recipe-hunter-server-side-iftekher-aziz.vercel.app/blog/"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const loadBlogs = async () => {
      const categoryData = await blogLoaders();
      setBlogs(categoryData);
    };
    loadBlogs();
  }, []);

  return (
    <section>
      {/* Title Section */}
      <div className="">
        <div className="mx-auto max-w-7xl pt-10 px-6 mb-10 ">
          <div>
            <h1 className="font-bold text-4xl text-center py-4">Blog Posts</h1>
          </div>
        </div>
      </div>
      {/* Blog Section */}
      <div className="mx-auto max-w-7xl px-8 mt-20 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogPost key={blog.id} blog={blog}></BlogPost>
          ))}
        </div>
        <div className="text-center  mt-10">
          {/*  <button className="btn btn-primary">Download PDF</button> */}
          <button
            className="btn btn-primary"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
