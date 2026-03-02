import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import platstore from "./assets/playstore.png";
import phone1 from "./assets/img_1.png"
import phone2 from "./assets/img_2.png"
import phone3 from "./assets/img_3.png"
import phone4 from "./assets/img_4.png"
import phone5 from "./assets/img_5.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdOutlineFileUpload, MdVerified, MdCampaign } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";


const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-10 md:pt-20">
      <div className="font-sans text-gray-800">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-50 text-black py-16 px-6 md:px-16 ">
          <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <div className="bg-purple-100 rounded-full w-fit p-1 mb-4">
                <p className="text-purple-950 font-bold text-[10px] uppercase tracking-wider">
                  🎵 Decentralized Ring Back Tune Marketplace
                </p>
              </div>
              <div className="flex flex-col md:items-start items-center">
                <h1 className="text-4xl md:text-6xl font-black md:font-bold leading-tight mb-6">
                  Turn Caller Wait Time Into <br />
                  <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                    Your Personal Brand
                  </span>
                </h1>

                <div className="w-full md:max-w-[550px]">
                  <p className="text-md text-gray-800 mb-6">
                    U-Tune lets you control what your callers hear while they wait. Upload custom Ring Back Tunes (RBT) - from business ads to personal messages - and transform every incoming call into a branding opportunity.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 text-white">
                  <button className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded-lg hover:opacity-90">
                    <div className="flex gap-2 items-center justify-center">  
                      <FaApple className="text-2xl md:text-4xl"/> 
                      <div className="flex items-start flex-col">
                        <p>Download on</p>
                        <p className="font-bold">App Store</p>
                      </div>
                    </div>
                  </button>

                  <button className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded-lg hover:opacity-90">
                    <div className="flex gap-2 items-center justify-center">  
                      <img src={platstore} className="size-5 md:size-8"/> 
                      <div className="flex items-start flex-col">
                        <p>Download on</p>
                        <p className="font-bold">App Store</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Mobile Screenshots Slider */}
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1} // default 1 for mobile
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2, // 2 slides on all small screens
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {[phone1, phone2, phone3, phone4].map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex justify-center mt-0 md:mt-0">
                      <img
                        src={img}
                        alt="App Screenshot"
                        className="w-[220px] md:w-[260px] rounded-3xl shadow-2xl border-8 border-black"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-10">
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
              <h2 className="text-2xl font-bold">500K+</h2>
              <p>Active Users</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">2M+</h2>
              <p>Music Streams</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">150+</h2>
              <p>Brands</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">4.8★</h2>
              <p>App Rating</p>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-20 px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Complete RBT Management Platform
            </h2>
            <p className="text-gray-800">
              Upload, verify, and manage your Ring Back Tunes with professional features for personal and business use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mx-auto">

            {/* Upload */}
            <div className="feature_card bg-purple-50">
              <div className="card">
                <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                  <MdOutlineFileUpload className="text-3xl text-purple-600" />
                </div>
                <h3 className="h_3">Upload Custom Tunes</h3>
                <p className="text-sm text-gray-600">
                  Record or upload high-quality audio files, or use Text-to-Speech to create professional voice messages for your callers.
                </p>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-pink-50 feature_card">
              <div className="card">
                <div className="w-14 h-14 flex items-center justify-center bg-pink-100 rounded-full mb-4">
                  <MdVerified className="text-3xl text-pink-600" />
                </div>
                <h3 className="h_3">OTP & Verification</h3>
                <p className="text-sm text-gray-600">
                  Secure verification before activation.
                </p>
              </div>
            </div>

            {/* Advertising */}
            <div className="bg-orange-50 feature_card">
              <div className="card">
                  <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <MdCampaign className="text-3xl text-orange-600" />
                </div>
                <h3 className="h_3">Business Advertising</h3>
                <p className="text-sm text-gray-600">
                  Promote your brand to every caller.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How U-Tune Works</h2>
            <p className="text-gray-600 mt-2">
              Set up your custom Ring Back Tune in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-4 md:p-6 mx-auto">

          {/* Step 1 */}
          <div className="relative bg-white p-6 rounded-xl shadow">
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold rounded-full shadow-md">
              1
            </div>
            <h3 className="h_3">Download & Verify</h3>
            <p className="text-sm md:text-md text-gray-600">
              Download U-Tune and verify your phone number using OTP authentication for secure access.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-6 rounded-xl shadow">
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold rounded-full shadow-md">
              2
            </div>
            <h3 className="h_3">Create or Upload Tunes</h3>
            <p className="md:text-md text-sm text-gray-600">
              Record audio externally and upload your files.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-6 rounded-xl shadow">
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold rounded-full shadow-md">
              3
            </div>
            <h3 className="h_3">Activate Your RBT</h3>
            <p className="md:text-md text-sm text-gray-600">
              Activate your Ring Back Tune and let your callers hear your custom message or music while they wait.
            </p>
          </div>

        </div>
        </section>

        {/* ================= EARLY COMMUNITY ================= */}
        <section className="py-20 px-6 md:px-16 bg-white text-black text-center">
          
          <div className="mx-auto">
            
            <h2 className="text-4xl font-bold mb-4">
              Join Our Early Community
            </h2>

            <p className="text-lg mb-8 text-gray-800">
              See what our users are saying about Utune
            </p>

                {/* ================= TESTIMONIALS ================= */}
                <section>

                  <div className="grid md:grid-cols-3 gap-8 ">

                    {/* Card 1 */}
                    <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md">
                      
                      {/* Stars */}
                      <div className="flex gap-1 text-orange-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-gray-700 italic mb-6 text-center md:text-start">
                        "This app is a game changer! I love being able to assign different songs to my family and friends. Now I always know who's calling without even looking at my phone!"
                      </p>

                      {/* User */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-semibold">
                          SK
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Sarah Kim</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                      </div>

                    </div>


                    {/* Card 2 */}
                    <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md">
                      
                      <div className="flex gap-1 text-orange-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      <p className="text-gray-700 italic mb-6 text-center md:text-start">
                        "Super easy to use! I assigned my favorite songs to my closest contacts in minutes. The interface is beautiful and intuitive. Highly recommend!"
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-semibold">
                          SK
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Sarah Kim</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                      </div>

                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md">
                      
                      <div className="flex gap-1 text-orange-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      <p className="text-gray-700 italic mb-6 text-center md:text-start">
                        "U-Tune transformed how I do business! I use a professional voice message to greet callers with my business hours and promotions. My customers love it and sales have increased!"
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-semibold">
                          SK
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Sarah Kim</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </section>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Brand Identity?
            </h2>

            <p className="mb-6">
              Join over 500,000 users and businesses who've turned caller wait time into a powerful branding tool. Download U-Tune today and make every call count!
            </p>

            <div className="flex gap-4 items-center justify-center text-white">
                <button className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded-lg hover:opacity-90">
                  <div className="flex gap-2 items-center justify-center">  
                    <FaApple className="text-2xl md:text-4xl"/> 
                    <div className="flex items-start flex-col">
                      <p>Download on</p>
                      <p className="font-bold">App Store</p>
                    </div>
                  </div>
                </button>

                <button className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded-lg hover:opacity-90">
                  <div className="flex gap-2 items-center justify-center">  
                    <img src={platstore} className="size-5 md:size-8"/> 
                    <div className="flex items-start flex-col">
                      <p>Download on</p>
                      <p className="font-bold">App Store</p>
                    </div>
                  </div>
                </button>
              </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 items-center justify-center md:items-start md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">U-Tune</h3>
              <p className="text-sm">
                The future of personalized caller branding.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-sm">
                <li>Upload RBT</li>
                <li>Verification</li>
                <li>Advertising</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li> <a href="/about" className="text-white hover:text-blue-300 mx-2">About</a> </li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li> <a href="">Help Center</a> </li>
                <li> <a href="/privacy" className="text-white hover:text-blue-300 mx-2">Privacy Policy</a> </li>
                <li> <a href="/terms" className="text-white hover:text-blue-300 mx-2">Terms of Services</a> </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xs mt-8">
            © 2026 U-Tune. All rights reserved.
          </p>
        </footer>

      </div>
      </div>
    </>
  );
};

export default LandingPage;