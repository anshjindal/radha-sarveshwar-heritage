export type NavLink = { href: string; key: string };
export type NavGroup = { key: string; items: NavLink[] };

export const navigation: (NavLink | NavGroup)[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  {
    key: "mandir",
    items: [
      { href: "/construction", key: "construction" },
      { href: "/calendar", key: "calendar" },
    ],
  },
  {
    key: "getInvolved",
    items: [
      { href: "/volunteer", key: "volunteer" },
      { href: "/seva", key: "seva" },
    ],
  },
  {
    key: "supportUs",
    items: [
      { href: "/donate", key: "donate" },
      { href: "/sponsorship", key: "sponsorship" },
    ],
  },
  { href: "/contact", key: "contact" },
];

export const donateHref = "/donate";

export const isGroup = (entry: NavLink | NavGroup): entry is NavGroup =>
  "items" in entry;

export const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);
