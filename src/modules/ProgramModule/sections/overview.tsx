"use client";
export default function Overview() {
  const images = [
    { src: "next.svg", alt: "" },
    { src: "next.svg", alt: "" },
    { src: "next.svg", alt: "" },
  ];

  return (
    <section className="flex flex-col w-full justify-center items-center min-h-screen px-20 py-10 max-lg:px-15 max-md:px-10">
      <div className="grid grid-cols-2 gap-32 max-lg:gap-14 max-md:gap-6 justify-between w-full h-full">
        <div className="flex justify-center flex-col items-start gap-6 max-md:gap-3">
          <div className="flex flex-col gap-2 bg-linear-to-r text-6xl max-md:text-base font-poppins font-bold text-transparent bg-clip-text from-[#3293EC] to-[#EA3C43] max-lg:text-3xl">
            <h1 className="">Program BEM</h1>
            <h1 className="">Fasilkom UI</h1>
          </div>
          <p className="text-xl max-lg:text-sm max-md:text-xs font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            repudiandae.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("our-programs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-3 max-md:text-sm bg-[#22629E] text-white rounded-xl flex gap-2.5 items-center hover:opacity-90 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z"
                fill="white"
              />
            </svg>
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-3xl max-md:gap-2 max-md:h-46 h-full aspect-4/3 max-md:aspect-square">
          <div className="bg-gray-200 rounded-lg max-md:rounded-md overflow-hidden">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-200 rounded-lg max-md:rounded-md overflow-hidden">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 bg-gray-200 rounded-lg max-md:rounded-md overflow-hidden">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
