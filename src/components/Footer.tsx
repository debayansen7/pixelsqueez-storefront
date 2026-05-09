import Link from "next/link";
import { siteContent } from "../data/content";

export default function Footer() {

  const { built_by, buildByLink, copyright, brand, links } = siteContent.footer;

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand & Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-xl font-black text-indigo-600 tracking-tighter">
              {brand}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} {copyright} <a href={buildByLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={built_by}
            className="text-slate-400 cursor-pointer dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 border-b border-transparent hover:border-slate-400 dark:hover:border-slate-500 pb-1">
            {built_by}
          </a>
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 text-sm font-medium">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
