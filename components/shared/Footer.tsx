import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="assets/images/logo2.svg"
            alt="logo"
            loading="eager"
            width={128}
            height={38}
          />
        </Link>
        <p className="text-gray-500 sm:text-gray-500 md:text-gray-500">© 2024 EventEuphoria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
