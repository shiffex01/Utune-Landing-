import { MdOutlineFileUpload, MdVerified, MdCampaign, MdMic, MdBolt, MdPhone, MdMusicNote, MdCloud, MdSmartphone } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import platstore from "./assets/playstore.png";


const Features = () => {
  return (
    <div className="pt-20 md:pt-22 overflow-x-hidden">

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-pink-500/10 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center text-black">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="block text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Complete RBT Control
            </span>
          </h2>

          <p className="text-md md:text-lg max-w-2xl text-gray-800 mx-auto">
            Everything you need to create, manage, and optimize your Ring Back Tunes for personal branding or business advertising
          </p>

        </div>
      </div>

      {/* Features Cards */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          {/* Upload */}
          <div className="bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <MdOutlineFileUpload className="text-3xl text-purple-600" />
            </div>
            <h3 className="h_3">Upload Custom Tunes</h3>
            <div>
            <p className="text-sm text-gray-600">
              Record or upload high-quality audio files in various formats. Use Text-to-Speech to create professional voice messages for your callers instantly.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>Multiple audio format support</li>
                <li>High-quality audio processing</li>
                <li>Easy drag-and-drop upload</li>
            </ul>
            </div>
          </div>

          {/* Verification */}
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-pink-100 rounded-full mb-4">
              <MdVerified className="text-3xl text-pink-600" />
            </div>
            <h3 className="h_3">OTP Verification</h3>
            <div>
            <p className="text-sm text-gray-600">
              Secure phone number verification via OTP ensures your account and tunes are protected and authenticated. Multi-layer security keeps your content safe.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>One-time password authentication</li>
                <li>Encrypted data transmission</li>
                <li>Account security monitoring</li>
            </ul>
            </div>
          </div>

          {/* Advertising */}
          <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <MdCampaign className="text-3xl text-orange-600" />
            </div>
            <h3 className="h_3">Business Advertising</h3>
            <div>
            <p className="text-sm text-gray-600">
              Turn your wait time into valuable advertising space. Promote your business, services, special offers, or brand messaging while customers call you.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>Professional voice messages</li>
                <li>Promotional content support</li>
                <li>Schedule different messages</li>
            </ul>
            </div>
          </div>

          {/* Tune recording */}
          <div className="bg-violet-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-violet-100 rounded-full mb-4">
              <MdMic className="text-3xl text-violet-600" />
            </div>
            <h3 className="h_3">Utune Studio Recording</h3>
            <div>
            <p className="text-sm text-gray-600">
              Record studio-quality tunes externally and upload them to the platform. Future in-app recorder with background music integration <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">coming soon</span>.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>Professional voice messages</li>
                <li>Promotional content support</li>
                <li>Schedule different messages</li>
            </ul>
            </div>
          </div>

          {/* Integration */}
          <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <MdSmartphone className="text-3xl text-orange-600" />
            </div>
            <h3 className="h_3">Smart Integration</h3>
            <div>
            <p className="text-sm text-gray-600">
              Seamlessly integrates with your phone's systems. Works perfectly with both iOS and Android devices with carrier support across major networks.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>iOS & Android compatible</li>
                <li>Major carrier support</li>
            </ul>
            </div>
          </div>

           {/* Activation */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <MdBolt className="text-3xl text-blue-600" />
            </div>
            <h3 className="h_3">Instant Activation  </h3>
            <div>
            <p className="text-sm text-gray-600">
              Activate your Ring Back Tunes with a single tap. Changes take effect immediately, so you can update your message anytime you want.
            </p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-600 space-y-1">
                <li>One-tap activation</li>
                <li>Real-time updates</li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      {/* And more */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            <h2 className="text-4xl font-bold mb-4">
                And Much More...
            </h2>
            <p className="text-gray-800">
                Additional features to enhance your experience
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <MdCloud className="text-3xl text-blue-600 mb-4" />
            <h3 className="h_3">Cloud Storage </h3>
            <div>
            <p className="text-sm text-gray-600">
              Store all your tunes in the cloud for easy access
            </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <MdMusicNote className="text-3xl text-purple-600 mb-4" />
            <h3 className="h_3">Audio Editor</h3>
            <div>
            <p className="text-sm text-gray-600">
              Built-in tools to trim and enhance your audio
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
              <section className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-6">
                  <h2 className="text-4xl font-bold mb-4">
                    Experience All Features Today
                  </h2>
      
                  <p className="mb-6">
                    Download U-Tune now and unlock the full power of Ring Back Tune management
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
  );
};

export default Features;