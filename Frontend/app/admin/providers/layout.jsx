"use client";
import Link from "next/link";
import "./providers.scss";
import { usePathname } from "next/navigation";
export default function ProvidersLayout({ children }) {
  const pathname = usePathname();
  const providerNav = [
    {
      href: "/admin/providers",
      title: "Providers",
    },
    {
      href: "/admin/providers/payment_request",
      title: "Payment request",
    },
    {
      href: "/admin/providers/settlements",
      title: "Settlements",
    },
    {
      href: "/admin/providers/cash_collection",
      title: "Cash collection",
    },
  ];

  return (
    <div>
      <nav className="providers_nav">
        {providerNav.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.title}
              href={link.href}
              className={`provider_link ${isActive && "active"}`}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
      <div>{children}</div>
    </div>
  );
}