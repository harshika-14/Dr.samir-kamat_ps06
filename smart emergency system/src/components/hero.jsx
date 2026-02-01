import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 pt-24 bg-gradient-to-r from-[#0b1220] to-[#111827]">
      
     
      <div className="w-full md:w-1/2 space-y-6">
        <span className="bg-white/10 px-4 py-1 rounded-full text-sm">
          Advanced Emergency Vehicle Safety
        </span>

        <h1 className="text-5xl font-bold leading-tight">
          Emergency Help <br />
          <span className="text-red-500">Always Within Reach</span>
        </h1>

        <p className="text-gray-300 max-w-xl">
          A smart emergency vehicle assistance system that instantly alerts
          your close contacts and escalates to admin & emergency services
          with live GPS tracking.
        </p>

        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-full">
            Get Started
          </button>
          <button className="border border-white/30 px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>

        <div className="flex gap-10 pt-6 text-sm">
          <div>
            <h3 className="text-xl font-bold">24/7</h3>
            Monitoring
          </div>
          <div>
            <h3 className="text-xl font-bold">Live</h3>
            GPS Tracking
          </div>
          <div>
            <h3 className="text-xl font-bold">Instant</h3>
            Alerts
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:block w-1/2">
        <FaLocationArrow className="text-red-600 text-[300px] mx-auto opacity-30" />
      </div>
    </section>
  );
}