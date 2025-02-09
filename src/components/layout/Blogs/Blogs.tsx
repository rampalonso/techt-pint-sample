import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <section className="mt-32">
      <div className="text-center px-64">
        <p className="text-2xl text-primary font-semibold">Blogs & Articles</p>
        <h2 className="text-5xl font-medium mt-6 leading-16">
          Innovation Is The Core Of{" "}
          <span className="bg-primary rounded-2xl py-1 px-2 font-semibold">
            Everything
          </span>
        </h2>
      </div>
      <div className="mt-12 flex flex-row gap-8">
        <div className="rounded-2xl shadow-md shadow-gray-300/50">
          <div className="flex flex-col">
            <div>
              <Image
                width={300}
                height={200}
                src="https://picsum.photos/300/200"
                alt="Image"
                className="rounded-tl-2xl rounded-tr-2xl object-cover w-full aspect-auto"
              />
            </div>
            <div className="mt-2 p-4">
              <div className="flex items-center gap-2">
                <span className="block rounded-full size-4 bg-primary"></span>
                <p className="text-md text-gray-500 ">December 11, 2022</p>
              </div>
              <h3 className="text-xl font-medium mt-4">
                How To Find Bright Idea ?
              </h3>
              <p className="text-md text-gray-400 w-fit">
                Aenean finibus dignissim nisi quis placerat. Vivamus facilisis
                ligula nulla, quis laoreet libero condimentum in. Praesent
                porttitor volutpat feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-md shadow-gray-300/50">
          <div className="flex flex-col">
            <div>
              <Image
                width={300}
                height={200}
                src="https://picsum.photos/300/202"
                alt="Image"
                className="rounded-tl-2xl rounded-tr-2xl object-cover w-full aspect-auto"
              />
            </div>
            <div className="mt-2 p-4">
              <div className="flex items-center gap-2">
                <span className="block rounded-full size-4 bg-primary"></span>
                <p className="text-md text-gray-500 ">December 11, 2022</p>
              </div>
              <h3 className="text-xl font-medium mt-4">
                How To Deal With Your Client ?
              </h3>
              <p className="text-md text-gray-400 w-fit">
                Aenean finibus dignissim nisi quis placerat. Vivamus facilisis
                ligula nulla, quis laoreet libero condimentum in. Praesent
                porttitor volutpat feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl shadow-md shadow-gray-300/50">
          <div className="flex flex-col">
            <div>
              <Image
                width={300}
                height={200}
                src="https://picsum.photos/300/201"
                alt="Image"
                className="rounded-tl-2xl rounded-tr-2xl object-cover w-full aspect-auto"
              />
            </div>
            <div className="mt-2 p-4">
              <div className="flex items-center gap-2">
                <span className="block rounded-full size-4 bg-primary"></span>
                <p className="text-md text-gray-500 ">December 11, 2022</p>
              </div>
              <h3 className="text-xl font-medium mt-4">
                How To Start Good Project ?
              </h3>
              <p className="text-md text-gray-400 w-fit">
                Aenean finibus dignissim nisi quis placerat. Vivamus facilisis
                ligula nulla, quis laoreet libero condimentum in. Praesent
                porttitor volutpat feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
