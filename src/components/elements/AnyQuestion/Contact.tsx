import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full p-5 lg:p-20 inline-flex justify-between items-center">
      <div className="relative bg-white flex rounded-3xl drop-shadow-lg p-20 max-lg:p-6 w-full items-center">
        <div className="flex flex-col justify-start items-start gap-10 max-lg:max-w-1/2 max-lg:gap-4">
          <div className="self-stretch justify-start text-black text-4xl font-bold font-['Poppins'] max-lg:text-2xl">
            Kamu punya pertanyaan?
          </div>
          <div className="self-stretch justify-start text-black text-xl max-lg:text-sm font-normal font-['Poppins']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Link href="https://www.instagram.com/bemfasilkomui/">
            <Button className="gap-3">
              <div className="w-5 h-5 relative">
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
              </div>
              <div className="text-center justify-start text-white text-base font-medium font-['Poppins']">
                Contact Us
              </div>
            </Button>
          </Link>
        </div>
        <div className="max-lg:absolute max-lg:right-5 -z-10 aspect-3/2 shrink-0 h-full max-lg:h-52">
          <img src="/contact-asset.svg" alt="" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
