import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="lg:px-12 md:px-8 mx-auto bg-gray-700 text-white">
        <div className="flex flex-col justify-center items-center h-[50vh] gap-4">
          <div className="hero-section text-4xl text-center leading-[4rem]">
            <h1>Better Talent Awaits</h1>
            <p>Hiring made easier than ever</p>
          </div>
          <button className="btn btn-outline">Try it for free</button>
        </div>
      </div>
    </>
  )
}
