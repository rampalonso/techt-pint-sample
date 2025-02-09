import React from "react";
import LogoIcon from "../Header/icons/Logo";
import SocialIcon from "./icons/SocialIcon";
import PlusIcon from "./icons/PlusIcon";

const Footer = () => {
  return (
    <footer className="mt-32 bg-gray-900 text-gray-100 w-full">
      <div className="max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 cursor-pointer">
              <LogoIcon className="size-8 fill-primary" />
              <span className="text-4xl  font-bold">Techt</span>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ligula justo{" "}
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
            </div>
          </div>
          <div>
            <p className="text-xl text-primary font-medium">Other pages</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>HomePage</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>About Us</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>Services</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>Contact</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl text-primary font-medium">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>Privacy Policy</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>Terms of use</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>Disclaimer</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PlusIcon />
                <span>FAQ</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl text-primary font-medium">Contact Info</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>75 Garuda, Maja, INA 789</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-primary"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <span>Hello@Foxcreation.net</span>
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>+111-222-333</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
