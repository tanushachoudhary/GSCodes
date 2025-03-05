import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import pic from "../assets/pic.jpg";
import { Link } from "react-router-dom";
import discuss from "../assets/discuss.jpg";
import solve from "../assets/solve.jpg";
import compete from "../assets/compete.jpg";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <header
        id="head"
        className="text-center py-16 bg-blue-600 text-white bg-cover bg-center min-h-svh flex flex-col justify-center items-center px-5"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-3xl border-2 border-white shadow-lg max-w-lg text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Solve, Discuss & Compete
          </h1>
          <p className="mt-4 text-lg">
            A platform for students to enhance their coding skills.
          </p>
          <Link to="/login">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </header>
      {/* Features Section */}
      <section className="py-16 px-6 grid gap-12 mt-20">
        {/* Solve Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mb-20">
          <div className="w-3/4 mx-auto justify-self-start">
            <Link to="/problems">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
                  <h2 className="text-2xl font-semibold">Solve Problems</h2>
                  <p className="mt-2 text-gray-600 text-xl/8">
                    • Practice coding with a variety of problems.
                    <br />
                    • Strengthen your programming skills.
                    <br />• Get hands-on experience with algorithms, data
                    structures, and optimization techniques.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <img
            src={solve}
            alt="Solve Problems"
            className="w-xl rounded-xl shadow-lg "
          />
        </div>

        {/* Discuss Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mb-20">
          <img
            src={discuss}
            alt="Discuss Solutions"
            className="w-xl rounded-xl shadow-lg ml-30 "
          />
          <div className="w-3/4 ml-20 justify-self-start">
            <Link to="/community">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
                  <h2 className="text-2xl font-semibold">Discuss Solutions</h2>
                  <p className="mt-2 text-gray-600 text-xl/8">
                    • Engage with the community to share insights. <br /> •
                    Collaborate with like-minded programmers and improve your
                    problem-solving skills. <br />• Share your approaches, learn
                    new techniques, and explore alternative solutions.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Compete & Rank */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center mb-20">
          <div className="w-3/4 mx-auto justify-self-start">
            <Link to="/leaderboard">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
                  <h2 className="text-2xl font-semibold">Compete & Rank</h2>
                  <p className="mt-2 text-gray-600 text-xl/8">
                    • Challenge others and climb the leaderboard. <br />
                    • Test your skills against top programmers.
                    <br />• Earn points, unlock achievements, and see where you
                    rank among your peers.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <img
            src={compete}
            alt="Compete & Rank"
            className="w-xl rounded-xl shadow-lg"
          />
        </div>
      </section>

      <hr className="text-gray-500 w-1/2 mx-auto" id="about" />
      {/* About section */}
      <div
        id="about"
        className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-8 rounded-3xl my-20 max-w-3xl mx-auto text-left shadow-xl"
      >
        <h1 className="text-3xl md:text-4xl text-center">About Us</h1>
        <p className="mt-5 text-lg leading-relaxed">
          • Community Page: Dedicated community page for all year students,
          fostering interaction, knowledge sharing, and mentorship. <br />
          • Guidance from Seniors: 4th-year students can share valuable
          insights, placement experiences, and interview tips to help juniors
          navigate their career paths with confidence. <br />
          • Coding Practice & Resources: A built-in code editor and curated
          coding problems—specially selected based on real placement and
          interview experiences—allow students to hone their problem-solving
          skills effectively. <br />
          • Profile & Leaderboard: Students can view their own and others'
          profiles, track progress, and engage in healthy competition,
          motivating everyone to push their limits. <br /> This platform is more
          than just a website—it's a supportive ecosystem where IT students
          learn, compete, and grow together for a brighter future
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
