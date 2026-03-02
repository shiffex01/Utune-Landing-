import { MdOutlineFileUpload, MdVerified, MdCampaign, MdMic, MdBolt, MdPhone, MdMusicNote, MdCloud, MdSmartphone } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import platstore from "./assets/playstore.png";
import Footer from "./Footer";


const Usage = () => {
  return (
    <div className="pt-20 md:pt-22">

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-pink-500/10 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center text-black">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How
            <span className="block text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              U-Tune Works
            </span>
          </h2>

          <p className="text-md md:text-lg max-w-2xl text-gray-800 mx-auto">
            Set up your custom Ring Back Tune in just a few simple steps. No technical knowledge required.
          </p>

        </div>
      </div>

      {/* Features Cards */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid gap-8 md:grid-cols-2 ">

          {/* Step 1 */}
          <div className=" p-6 rounded-2xl hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-600 w-fit text-white rounded-full mb-3 to-pink-500 p-3 md:px-4 md:py-2">
                <p>Step 1</p>
            </div>
            <h3 className="h_2">Download & Install U-Tune</h3>
            <div>
            <p className="md:text-xl text-lg text-gray-600">
              Get the U-Tune app from the App Store or Google Play Store. The app is free to download and available worldwide.
            </p>
            </div>
          </div>

             {/* Step 2*/}
          <div className=" p-6 rounded-2xl hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-600 w-fit text-white rounded-full mb-3 to-pink-500 p-3 md:px-4 md:py-2">
                <p>Step 2</p>
            </div>
            <h3 className="h_2">Verify Your Phone Number</h3>
            <div>
            <p className="md:text-xl text-lg text-gray-600">
              Enter your phone number and verify it with the OTP (One-Time Password) sent to you. This ensures your account security.
            </p>
            </div>
          </div>

          {/* Step 3*/}
          <div className=" p-6 rounded-2xl hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-600 w-fit text-white rounded-full mb-3 to-pink-500 p-3 md:px-4 md:py-2">
                <p>Step 3</p>
            </div>
            <h3 className="h_2">Create or Upload Your Tune</h3>
            <div>
            <p className="md:text-xl text-lg text-gray-600">
              Choose how you want to create your Ring Back Tune. Upload an audio file, use Text-to-Speech, or record directly.
            </p>
            </div>
          </div>

          {/* Step 4*/}
          <div className=" p-6 rounded-2xl hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-600 w-fit text-white rounded-full mb-3 to-pink-500 p-3 md:px-4 md:py-2">
                <p>Step 4</p>
            </div>
            <h3 className="h_2">Customize Your Settings</h3>
            <div>
            <p className="md:text-xl text-lg text-gray-600">
              Fine-tune your Ring Back Tune settings. Choose when it plays, edit the audio, and preview before activation.
            </p>
            </div>
          </div>

          {/* Step 5*/}
          <div className=" p-6 rounded-2xl hover:shadow-lg transition">
            <div className="bg-gradient-to-r from-blue-600 w-fit text-white rounded-full mb-3 to-pink-500 p-3 md:px-4 md:py-2">
                <p>Step 5</p>
            </div>
            <h3 className="h_2">Activate & Go Live!</h3>
            <div>
            <p className="md:text-xl text-lg text-gray-600">
              Hit the activate button and your Ring Back Tune goes live instantly. Your callers will now hear your custom message!
            </p>
            </div>
          </div>

          </div>
        </section>
        

      {/* ================= CTA ================= */}
              <section className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-4xl font-bold mb-4">
                    Ready to Get Started?
                  </h2>
      
                  <p className="mb-6">
                    Download U-Tune now and set up your custom Ring Back Tune in minutes
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
      
              {/* ================= FOOTER ================= */}
              <Footer/>
    </div>
  );
};

export default Usage;