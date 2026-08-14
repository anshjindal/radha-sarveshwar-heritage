import Image from "next/image";
import { nav, site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

export function Footer() {
  return (
    <footer className="bg-maroon-deep py-14 text-cream">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-gold/40 object-cover"
            />
            <div>
              <p className="font-deva text-gold-light">{site.blessing}</p>
              <p className="font-serif text-xl">{site.name}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm tracking-[0.16em] text-cream/70 uppercase">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold-light">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <LotusDivider className="my-10" />
        <div className="flex flex-col gap-3 text-sm text-cream/55 md:flex-row md:justify-between">
          <p>
            {site.address.line1}, {site.address.line2}
          </p>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
