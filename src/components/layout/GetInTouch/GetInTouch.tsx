import { Button } from "@/components/ui";
import React from "react";

const GetInTouch = () => {
  return (
    <section className="mt-48">
      <div className="flex flex-row relative">
        <div className="p-10 w-5/10">
          <p className="text-2xl text-lime-300 font-semibold">Get In Touch</p>
          <h2 className="text-5xl font-medium mt-4 leading-14">
            Let Us Do The Work, So You Can Focus On What Matters
          </h2>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit cras vitae
            mus tellus, mattis tortor quam facilisis dapibus ac nascetur cubilia
            quisque est nunc fermentum, sociis neque dui libero augue porta
            eros.
          </p>
          <div className="flex flex-row gap-8 mt-8">
            <div className="bg-gray-900 text-gray-100 rounded-2xl p-6 flex flex-row gap-4 w-5/10">
              <span className="block bg-primary size-12 rounded-full"></span>
              <div className="flex flex-col">
                <p className="text-xl font-medium">Email</p>
                <p className="text-md text-gray-300">Hello@tech.net</p>
              </div>
            </div>
            <div className="bg-primary text-gray-900 rounded-2xl p-6 flex flex-row gap-4 w-5/10">
              <span className="block bg-gray-900 size-12 rounded-full"></span>
              <div className="flex flex-col">
                <p className="text-xl font-medium">Phone</p>
                <p className="text-md">+111-222-333</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-100 rounded-2xl mt-8 h-56 flex items-center justify-center">
            <span className="text-gray-300">maps</span>
          </div>
        </div>
        <div className="mt-10 w-5/10">
          <div className="bg-zinc-100 rounded-2xl p-10">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="name">
                  Name
                </label>
                <input
                  className="outline-none ring-1 ring-gray-300 bg-white rounded-lg p-4 pl-6 w-full"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="email">
                  Email
                </label>
                <input
                  className="outline-none ring-1 ring-gray-300 bg-white rounded-lg p-4 pl-6 w-full"
                  placeholder="Your Email"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="outline-none ring-1 ring-gray-300 bg-white rounded-lg p-4 pl-6 w-full resize-none h-40"
                  placeholder="Your Message"
                  id="message"
                  name="message"
                />
              </div>
              <fieldset className="flex flex-col gap-2">
                <legend className="text-xl">Select topic</legend>
                <div className="mt-2 flex flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <input className="size-4" id="option-1" type="checkbox" />
                    <label htmlFor="option-1">Let&apos;s Start Project</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input className="size-4" id="option-1" type="checkbox" />
                    <label htmlFor="option-1">Hello Techt</label>
                  </div>
                </div>
              </fieldset>

              <div className="mt-4">
                <Button
                  variant="primary"
                  className="py-4 px-8 text-lg font-medium"
                >
                  Submit Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
