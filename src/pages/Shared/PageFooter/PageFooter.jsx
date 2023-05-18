import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { FaCcMastercard, FaCcStripe, FaCcVisa, FaPaypal } from "react-icons/fa";
import { Footer } from "flowbite-react";
import './PageFooter.css'

const PageFooter = () => {
  return (
    <Footer container={true} className="mt-12">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex justify-center items-center gap-24">
            <div className="flex justify-center items-center gap-10">
              <div className="mx-auto">
                <img
                  src="/puzzled.png"
                  className="mr-3 h-9 lg:h-24"
                  alt="Logo"
                />
                <h3 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic animate-pulse">
                  The Puzzled Mind
                </h3>
                <div>
                  <p className="text-pink-600">
                    Order your favourite toys online with us now.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Footer.Title title="address" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  <span className="text-pink-600">Phone:</span> 01637131835
                </Footer.Link>
                <Footer.Link href="#">
                  <span className="text-pink-600">Email:</span>{" "}
                  sma.fkml@gmail.com
                </Footer.Link>
                <Footer.Link href="#">
                  <span className="text-pink-600">Office:</span> Chasara,
                  Narayanganj
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="INFORMATION" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">FAQs</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Terms Of Use</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Payment Partner" />
              <Footer.LinkGroup col={true}>
                <div className="flex flex-col mt-2 space-y-2">
                  <div className="flex gap-2"><FaPaypal className="mt-1"/> <span>Paypal</span></div>
                  <div className="flex gap-2"><FaCcMastercard className="mt-1"/> <span>Mastercard</span></div>
                  <div className="flex gap-2"><FaCcVisa className="mt-1"/> <span>Visa</span></div>
                  <div className="flex gap-2"><FaCcStripe className="mt-1"/> <span>Stripe</span></div>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between bg-trend-footer px-2">
          <Footer.Copyright className="text-white text-2xl" href="#" by="The Puzzled Mind™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
            <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default PageFooter;
