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

export function FooterHomeBar() {
  const pathname = usePathname();

  return (
    <nav className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4 w-screen border-t-2 border-black/70 py-3.5 sm:mb-6">
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
  );
}
