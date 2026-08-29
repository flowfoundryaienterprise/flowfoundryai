export interface NavLink {
  label: string;
  href: string;
  sectionId?: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Products", href: "/products", sectionId: "products" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "About", href: "/about", sectionId: "about" },
  { label: "Technology", href: "/technology", sectionId: "technology" },
  { label: "Team", href: "/team", sectionId: "team" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];
