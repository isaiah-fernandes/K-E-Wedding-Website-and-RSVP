 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos" },
  { href: "/meet-the-couple", label: "Meet the Couple" },
  { href: "/wedding-party", label: "Wedding Party" },
  { href: "/qa", label: "Q&A" },
  { href: "/rsvp", label: "RSVP" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="mx-auto w-full max-w-5xl pt-8 sm:pt-12">
      <div className="flex justify-center">
        <Link href="/" aria-label="Home">
          <img
            src="/api/wedding-image?name=logo.png"
            alt="K and E monogram logo"
            className="h-auto w-auto max-h-[340px]"
          />
        </Link>
      </div>
      <p className="mt-6 mb-2 text-center font-['Bell_MT','Times_New_Roman',serif] text-lg font-semibold text-[#541a28] sm:text-xl">
        Love God - Love Neighbours
      </p>
      <nav className="relative left-1/2 right-1/2 mt-4 -ml-[50vw] -mr-[50vw] w-screen border-b-2 border-black/70 py-3.5 sm:mt-5">
        <div className="mx-auto w-full max-w-5xl px-2 sm:px-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[20px] font-bold text-black">
            {links.map((link, idx) => (
              <li key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={`font-['Bell_MT','Times_New_Roman',serif] border-b transition-colors ${
                    isActivePath(pathname, link.href)
                      ? "border-black"
                      : "border-transparent hover:border-black/70"
                  } hover:text-[#541a28]`}
                >
                  {link.label}
                </Link>
                {idx < links.length - 1 ? <span className="mx-2 text-black">|</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
