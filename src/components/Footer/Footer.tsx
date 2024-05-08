import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Primary-bg px-2 lg:px-6 pb-6 text-center ">
      <hr className="mb-3 lg:mb-6 border-Neutral-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-2">
        <p className="lg:text-start text-sm md:text-lg text-white order-last lg:order-first ">
          Designed by
          <Link className="text-Neutral-8 ml-[6px]" target="_blank"
            href="https://themeforest.net/item/cryptdash-crypto-exchange-dashboard-html-template/46092301">
            UIAxis
          </Link>, Customized by
          <Link href="#" className="text-Neutral-8 ml-[6px]">
            {process.env.author}
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
