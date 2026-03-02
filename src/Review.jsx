import { MdOutlineFileUpload, MdVerified, MdCampaign, MdMic, MdBolt, MdPhone, MdMusicNote, MdCloud, MdSmartphone } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import platstore from "./assets/playstore.png";
import { FaStar } from "react-icons/fa";


const Review = () => {
  return (
    <div className="pt-20 md:pt-22 overflow-x-hidden">

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-pink-500/10 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center text-black">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users
            <span className="block text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-md md:text-lg max-w-2xl text-gray-800 mx-auto">
            Join thousands of satisfied users who have transformed their calling experience with U-Tune
          </p>

        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 px-6 md:px-16 bg-white text-black text-center">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300">
                
                {/* Stars */}
                <div className="flex gap-1 text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 italic mb-6 text-center md:text-start leading-relaxed">
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
            <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300">
                
                <div className="flex gap-1 text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                </div>

                <p className="text-gray-700 italic mb-6 text-center md:text-start leading-relaxed">
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
            <div className="bg-[#dcdde6] p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300">
                
                <div className="flex gap-1 text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                </div>

                <p className="text-gray-700 italic mb-6 text-center md:text-start leading-relaxed">
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
        

      {/* ================= CTA ================= */}
              <section className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-6">
                  <h2 className="text-4xl font-bold mb-4">
                    Join Our Happy Users
                  </h2>
      
                  <p className="mb-6">
                    Download U-Tune today and see why thousands are giving us 5-star reviews
                  </p>
      
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-purple-950">
                      <button className="flex justify-center items-center gap-2 bg-white px-6 py-3 rounded-lg hover:opacity-90">
                        <div className="flex gap-2 items-center justify-center">  
                          <FaApple className="text-2xl md:text-4xl"/> 
                          <div className="flex items-start flex-col">
                            <p>Download on</p>
                            <p className="font-bold">App Store</p>
                          </div>
                        </div>
                      </button>
      
                      <button className="flex justify-center items-center gap-2 bg-white px-6 py-3 rounded-lg hover:opacity-90">
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
      
              {/* ================= FOOTER ===== ============ */}
              <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center md:items-start gap-8">
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
  );
};

export default Review;