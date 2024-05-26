import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Primary-bg px-2 lg:px-6 pt-6 pb-6 text-center ">
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
