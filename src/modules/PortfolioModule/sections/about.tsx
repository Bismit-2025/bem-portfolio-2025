import PhotoMarquee from "./photo-marquee"

export default function About() {
  return (
    <section className="w-full px-20 h-screen relative">
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>
      <div className="flex gap-10 w-full h-full">
        <PhotoMarquee/>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="">Portfolio</h1>
          <p className="text-center text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eius consequuntur minima molestias obcaecati placeat libero eum voluptate delectus omnis.</p>
          <button>Explore More</button>
        </div>
        <PhotoMarquee/>
      </div>
    </section>
  )
}