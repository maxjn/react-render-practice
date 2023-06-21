import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-xs pb-4 bg-neutral-200">
      &copy;{new Date().getFullYear()}{" "}
      <Link
        className="hover:text-blue-600 transition"
        href={`https://github.com/maxjn`}
      >
        Mohamad Haqnegahdar (Maxjn)
      </Link>
    </footer>
  );
};

export default Footer;
