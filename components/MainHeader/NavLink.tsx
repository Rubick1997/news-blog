"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href }: Props) {
  const path = usePathname();
  const currentClass = (pathToCheck: string) =>
    path.startsWith(pathToCheck) ? "active" : undefined;

  return (
    <Link href={href} className={currentClass(href)}>
      {children}
    </Link>
  );
}
export default NavLink;

type Props = {
  href: string;
  children: React.ReactNode;
};
