import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-[#ffba00] py-8 h-[150px]">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link href="/company" className="py-2">
            The Company
          </Link>
        </div>

        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link href="/" className="py-2">
            Support
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pt-5">
        <div className="w-full text-center text-sm text-white">
          Green-escooters 2024
        </div>
      </div>
    </footer>
  );
}
