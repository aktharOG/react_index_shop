import type { NextPage } from "next";
import Image from "next/image";
import Carousel from "./components/carouselItem";


const Home = () => {
  const images = [
    "https://th.bing.com/th/id/OIP.DPUrp46Q-KXZIokkQ6ULgwHaGf?pid=ImgDet&rs=1",
    "https://th.bing.com/th?id=OIP.Ym3winoOLSlfjW6fQCdHowHaJa&w=221&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.oE9Fp9TEUzR9yTmZsbugRwHaJ5&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.DPUrp46Q-KXZIokkQ6ULgwHaGf&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.G9VNhuWA5nexwNi11N418AHaI4&w=228&h=273&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  ];
  return (
    <main className="flex min-h-screen min-w-full justify-center">
       <div className="lg:w-4/6 mx-auto my-2 absolute">
       <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
   
       </div>
     

     
      <div className="relative flex  flex-col justify-center items-center text-center text-[50px] shadow drop-shadow-2xl  ">
        <h1>Build Your Own App</h1>
        <button className="bg-slate-800 px-5 rounded-full shadow-lg hover:bg-blue-600 hover:text-white pr-10 pl-10 pt-2 pb-2 mt-5">Start</button>
      </div>
    </main>
  );
}

export default Home;
