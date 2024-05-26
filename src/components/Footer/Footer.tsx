import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Primary-bg px-2 lg:px-6 pb-6 text-center ">
      <hr className="mb-3 lg:mb-6 border-Neutral-10" />
      <p className="lg:text-start text-sm md:text-lg text-white order-last lg:order-first ">
        Made by
        <Link href="#" className="text-Neutral-8 ml-[6px]">
          {process.env.author}
        </Link>
      </p>
    </footer>
  );
};
export default Footer;
