import React from 'react'
import GlobalHero from '../components/GlobalHeroSection/GlobalHero'
import BlogPageSection from '../components/Blog/BlogPageSection'
import SuccessCTA from '../components/Home/SuccessCTA'
import OurBrands from '../components/About/OurBrands'

const BlogPage = () => {
  return (
    <>
        <GlobalHero
        title={"Blogs"}
        breadcrumb={"Blog"}
        para={
          "Explain what your company is working on and the value you provide to your customers."
        }
      />
      <BlogPageSection/>
      <SuccessCTA/>
      <OurBrands/>
    </>
  )
}

export default BlogPage