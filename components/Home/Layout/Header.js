jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../../misc/ButtonOutline";
import LogoSkillGarage from "../../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-2 md:px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <Link href="/">
            <div className="col-start-1 col-end-2 flex items-center">
              <LogoSkillGarage className="h-3 md:h-6 w-auto" />
            </div>
          </Link>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                activeLink === "hero" ? "text-purple-600 animation-active" : "text-black hover:text-purple-600"
              }`}
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                activeLink === "services" ? "text-purple-600 animation-active" : "text-black hover:text-purple-600"
              }`}
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("courses");
              }}
              className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                activeLink === "courses" ? "text-purple-600 animation-active" : "text-black hover:text-purple-600"
              }`}
            >
              Programs
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tutors"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutors");
              }}
              className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                activeLink === "tutors" ? "text-purple-600 animation-active" : "text-black hover:text-purple-600"
              }`}
            >
              Tutors
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
                activeLink === "testimonials" ? "text-purple-600 animation-active" : "text-black hover:text-purple-600"
              }`}
            >
              Testimonials
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <a
              href="http://web.classplusapp.com"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-600 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
            <ButtonOutline href="http://web.classplusapp.com" target="_blank" rel="noopener noreferrer">
              Sign Up
            </ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-between items-center text-black">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
                activeLink === "hero" ? "border-purple-600 text-purple-600" : "border-transparent"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6682 7.43438L8.84891 0.618616L8.39182 0.161526C8.28768 0.0580659 8.14683 0 8.00003 0C7.85323 0 7.71239 0.0580659 7.60824 0.161526L0.331861 7.43438C0.225143 7.54068 0.140803 7.66728 0.0838179 7.80671C0.0268328 7.94614 -0.0016424 8.09558 7.31515e-05 8.2462C0.00713246 8.86741 0.524227 9.36333 1.14545 9.36333H1.8955V15.1114H14.1046V9.36333H14.8705C15.1723 9.36333 15.4564 9.24509 15.67 9.03154C15.7751 8.92673 15.8584 8.8021 15.9151 8.66488C15.9717 8.52764 16.0006 8.38054 16 8.23208C16 7.93206 15.8817 7.64792 15.6682 7.43438ZM8.98833 13.8407H7.01173V10.2404H8.98833V13.8407ZM12.8339 8.09266V13.8407H10.1178V9.81689C10.1178 9.42686 9.80192 9.11096 9.41189 9.11096H6.58817C6.19814 9.11096 5.88224 9.42686 5.88224 9.81689V13.8407H3.16617V8.09266H1.47194L8.0018 1.56809L8.40947 1.97577L14.5299 8.09266H12.8339Z"
                  fill="#CCCCCC"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
                activeLink === "services" ? "border-purple-600 text-purple-600" : "border-transparent"
              }`}
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("courses");
              }}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
                activeLink === "courses" ? "border-purple-600 text-purple-600" : "border-transparent"
              }`}
            >
              Programs
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tutors"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutors");
              }}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
                activeLink === "tutors" ? "border-purple-600 text-purple-600" : "border-transparent"
              }`}
            >
              Tutors
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
                activeLink === "testimonials" ? "border-purple-600 text-purple-600" : "border-transparent"
              }`}
            >
              Testimonials
            </LinkScroll>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;