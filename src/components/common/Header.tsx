import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"

// const resources = ["About", "Posts", "Projects", "Contact"]

const Header: React.FC<EmptyProps> = () => {
  return (
    <Popover className="sticky top-0 z-10 bg-skin-header backdrop-blur-md backdrop-saturate-150 bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="rounded-md text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
            >
              <span className="sr-only">Home</span>
              <HomeIcon className="h-8 w-auto" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-skin-header  p-2 inline-flex items-center justify-center text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8 self-title">
          <Link
                    to="/about"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    About
                  </Link>

                  <Link
                    to="/posts"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    Posts
                  </Link>

                  <Link
                    to="/projects"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/contact"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    FAQ
                  </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-50 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
        >
          <div className=" shadow-lg bg-skin-header text-skin-header-fg h-screen divide-y-2 divide-skin-header-muted">
            <div className="pt-5 pb-6 px-5">
              <div className="z-50 flex items-center justify-between self-title">
                <Link
                  to="/"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                >
                  <span className="sr-only">Home</span>
                  <HomeIcon className="h-8 w-auto" />
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-skin-header rounded-md p-2 inline-flex items-center justify-center text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 self-title">
              <Link
                    to="/about"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    About
                  </Link>

                  <Link
                    to="/posts"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    Posts
                  </Link>

                  <Link
                    to="/projects"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    Projects
                  </Link>

                  <Link
                    to="/contact"
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    FAQ
                  </Link>

              </div>
            </div>
            <div className="py-6 px-5">
              <h1>Smal Form or CTA</h1>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
