import * as React from "react"
import { graphql } from "gatsby"

import {  Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"
import twenty from "../components/timeline/twenty"
import twentyone from "../components/timeline/twentyone"
import twentytwo from "../components/timeline/twentytwo"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
 
  const year20 = twenty;
  const year21 = twentyone;
  const year22 = twentytwo;

 

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
       {/* <Bio /> */}
       <section className=" lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/G0zK7BW/ignite-23-01.jpg" alt="" className="h-80 dark:bg-coolGray-500 aspect-video"/>
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
				<span className="text-xs uppercase dark:text-coolGray-400">Who is George ?</span>
				<h3 className="text-3xl font-bold">A Big Dreamer</h3>
				<p className="my-6 dark:text-coolGray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit dicta corrupti quibusdam voluptatibus perspiciatis at hic consectetur sed rerum, illum vitae reprehenderit deserunt maiores quos voluptate voluptatum ullam quasi.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>

<section className="p-6 my-6 dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-coolGray-800">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">200</p>
				<p className="capitalize">Orders</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-coolGray-800">
					<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
					<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
					<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
					<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">7500</p>
				<p className="capitalize">New customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-coolGray-800">
					<path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
					<rect width="32" height="32" x="80" y="264"></rect>
					<rect width="32" height="32" x="240" y="128"></rect>
					<rect width="32" height="32" x="136" y="168"></rect>
					<rect width="32" height="32" x="400" y="264"></rect>
					<path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">172%</p>
				<p className="capitalize">Growth</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-coolGray-900 dark:text-coolGray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-coolGray-800">
					<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
	</div>
</section>

<ul className=" lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
	
	<li>
	<section className="dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container flex flex-col justify-center  md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">7 Yearly Highlights</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Counting Every Stride</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">2022</summary>
				{year22.map((item)=>(
<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-coolGray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{item.title} </h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-coolGray-400">{item.date} </time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-coolGray-300">{item.description} </p>
			</a>
		</article>

        ))}
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">2021</summary>
				{year21.map((item)=>(
<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-coolGray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{item.title} </h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-coolGray-400">{item.date} </time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-coolGray-300">{item.description} </p>
			</a>
		</article>

        ))}
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">2020</summary>
				{year20.map((item)=>(
<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-coolGray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{item.title} </h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-coolGray-400">{item.date} </time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-coolGray-300">{item.description} </p>
			</a>
		</article>

        ))}
			</details>
		</div>
	</div>
</section>
	</li>
</ul>

<footer className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-coolGray-400 md:space-y-12 divide-opacity-50">
	
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2022 All rights reserved</span>
				
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
