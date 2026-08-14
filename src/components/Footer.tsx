import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-maroon-deep py-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-full bg-black object-cover"
          />
          <p className="mt-4 font-semibold">{site.name}</p>
          <p className="mt-2 text-sm leading-6 text-cream/70">
            A spiritual and cultural centre dedicated to Hindu values,
            tradition, and community in Norval, Canada.
          </p>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] text-gold uppercase">Navigation</p>
          <nav className="mt-4 flex flex-col gap-2 text-cream/80">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold-light">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] text-gold uppercase">Get in touch</p>
          <p className="mt-4 text-sm text-cream/80">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-gold-light">
              {site.email}
            </a>
          </p>
          {site.phones.map((phone) => (
            <p key={phone.id} className="text-sm">
              <a href={phone.href} className="hover:text-gold-light">
                {phone.display}
              </a>
            </p>
          ))}
          <p className="mt-3 text-sm text-cream/70">
            Daily {site.hours.time}
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-center text-sm text-cream/50 md:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
