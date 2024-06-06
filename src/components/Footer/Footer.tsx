import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Primary-bg px-2 lg:px-6 pt-6 pb-6 text-center ">
      <p className="text-sm text-white leading-7">
        Copyright©2024 {process.env.author} All right reserved.
      </p>
    </footer>
  );
};
export default Footer;
