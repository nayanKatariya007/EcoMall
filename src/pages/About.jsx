import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="font-[Mulish]">
      <main>

        {/* Banner Section */}
        <section className="p-14">
          <div className="px-3 py-32 lg:px-32 rounded-lg text-white bg-center bg-fixed relative before:content before:h-full before:w-full before:absolute before:top-0 before:left-0 before:bg-black before:opacity-80 before:rounded-lg" style={{ backgroundImage: "url('../assets/about-1.jpg')" }}>
            <div className="text-center relative z-10">
              <p className="uppercase text-lg font-medium mb-3 tracking-wider">Start from since 1990</p>
              <p className="text-4xl lg:text-[52px] font-extrabold leading-tight tracking-wide">We Help Everyone <br /> Enjoy Amazing Products</p>
            </div>
            <div className="flex justify-center relative z-10">
              <div className="text-center mx-10 mt-12">
                <p className="text-7xl font-extrabold">6M+</p>
                <p className="text-lg font-medium">Happy Clients</p>
              </div>
              <div className="text-center mx-10 mt-12">
                <p className="text-7xl font-extrabold">8M+</p>
                <p className="text-lg font-medium">Great Products</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-9 px-14 pb-20">
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Who We Are</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Our History</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Our Mission</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-zinc-100 px-14 py-20">
          <p className="text-3xl text-black font-bold tracking-wide mb-5">Our Team</p>
          <hr /><hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="overflow-hidden rounded-xl">
                  <img src={member.imgSrc} alt={member.name} className="w-full duration-300 rounded-xl overflow-hidden hover:scale-110" />
                </div>
                <div className="text-center p-6 pb-0">
                  <p className="text-black text-xl font-bold hover:text-sky-600 duration-200">{member.name}</p>
                  <p className="text-gray-400 pt-2">{member.position}</p>
                  <p>
                    <FontAwesomeIcon icon={faFacebookF} className="mx-3 my-3 pt-1 text-lg hover:text-sky-600 duration-200" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-3 my-3 pt-1 text-xl hover:text-sky-600 duration-200" />
                    <FontAwesomeIcon icon={faInstagram} className="mx-3 my-3 pt-1 text-xl hover:text-sky-600 duration-200" />
                    <FontAwesomeIcon icon={faPinterest} className="mx-3 my-3 pt-1 text-xl hover:text-sky-600 duration-200" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Section */}
        <section className="px-14 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="pr-52 h-fit my-auto">
              <p className="uppercase text-lg font-medium mb-3 tracking-wider">Our performance</p>
              <p className="text-4xl lg:text-[52px] font-extrabold leading-[55px] tracking-wide mb-8">We Believe In Quality Products</p>
              <p className="text-gray-400 pr-12 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
            </div>
            <div>
              <img src="../assets/about-2.jpg" alt="Performance" className="rounded-xl" />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="px-14">
          <div className="bg-sky-100 text-center py-20 rounded-lg">
            <div className="flex justify-center mb-5">
              <img src="../assets/avatar-1.jpg" alt="Client Avatar" className="rounded-full w-28 h-28" />
            </div>
            <p className="text-2xl w-4/5 m-auto tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum placerat diam eros eget ante suscipit porta sed sed elit. Aenean tincidunt porta molestie.</p>
          </div>
        </section>

      </main>
    </div>
  );
};

const teamMembers = [
  {
    name: "John Hossain",
    position: "CEO & Founder",
    imgSrc: "../assets/vee"
  },
  {
    name: "Jane Cooper",
    position: "Market Development",
    imgSrc: "../assets/dashu.jpg"
  },
  {
    name: "Kristin Watson",
    position: "Head Engineer",
    imgSrc: "../assets/dhavli.jpg"
  },
  {
    name: "Isabella",
    position: "Marketing",
    imgSrc: "../assets/team-4.jpg"
  }
];

export default About;
