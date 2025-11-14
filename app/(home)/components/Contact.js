export default function Contact() {
  return (
    <div className="px-6 md:px-16 py-16 flex flex-col md:flex-row">
      <form className="bg-gray-900 text-white p-8  w-full md:basis-[60%] shadow-lg space-y-6">
        {/* Username */}
        <div>
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-3 placeholder-gray-400"
          />
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-3 placeholder-gray-400"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none py-3 placeholder-gray-400"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full bg-transparent border border-gray-500 focus:border-white focus:outline-none p-3 placeholder-gray-400 rounded-lg"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-1/2 md:w-1/3 mt-4 bg-blue-600  transition text-white py-3 rounded-lg font-semibold hover:bg-transparent hover:text-blue-500"
        >
          Send Message
        </button>
      </form>

      <section
        className="w-full md:basis-[40%]  text-white p-10 relative overflow-hidden shadow-lg flex flex-col justify-between"
        style={{
          backgroundImage: 'url("/Images/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold">HAVE A PROJECT?</h1>
          <h1 className="text-4xl font-bold mt-2">GET IN TOUCH.</h1>
          <h3 className="text-lg mt-4 font-light">THINK WE DO NEXT.</h3>

          <ul className="mt-6 space-y-3 text-gray-200">
            <li>• Our team contacts you within one business day</li>
            <li>• We engage in an initial discussion to understand your requirements</li>
            <li>• Our team of analysts and developers assess the scope and propose a way forward with mutual consultation</li>
            <li>• All information is protected under NDA</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
