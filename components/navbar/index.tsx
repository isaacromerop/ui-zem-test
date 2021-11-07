import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (): React.ReactElement => {
  return (
    <div className="absolute z-10 top-0 left-0 flex items-center justify-end h-16 w-full text-white pt-4 pr-4 bg-transparent lg:justify-around">
      <GiHamburgerMenu className="cursor-pointer text-4xl lg:hidden" />
      <div className="hidden lg:inline-block">
        <p className="text-4xl">Rule of thumb.</p>
      </div>
      <div className="hidden items-center gap-x-3 text-xl font-light lg:flex">
        <Link href="#">
          <a>Past Trials</a>
        </Link>
        <Link href="#">
          <a>How It Works</a>
        </Link>
        <Link href="#">
          <a>Login / Sign Up</a>
        </Link>
        <GoSearch className="text-4xl ml-5 cursor-pointer" />
      </div>
    </div>
  );
};

export { Navbar };
