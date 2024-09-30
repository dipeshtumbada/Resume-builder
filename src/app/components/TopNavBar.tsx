"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      style={{ backgroundColor: '#161921' }}
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
      <Link href="/">
  <span className="sr-only">Konect U</span>
  <div className="flex items-center">
    <img
      src="/apple-touch-icon.png"
      alt="Konect U Logo"
      width={60} // Adjust width as needed
      height={60} // Adjust height as needed
      className="h-14 w-auto" // Additional classes as needed
    />
    <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
      Konect U
    </span>
  </div>
</Link>

        {/* <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
          <div className="ml-1 mt-1">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            />
          </div>
        </nav> */}
      </div>
    </header>
  );
};
