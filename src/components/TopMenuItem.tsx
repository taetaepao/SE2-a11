import Link from "next/link";

interface TopMenuItemProps {
  label: string;
  href: string;
}

export default function TopMenuItem({ label, href }: TopMenuItemProps) {
  return (
    <Link href={href}>
      <span className="px-4 py-2 text-black hover:text-yellow-600 font-medium cursor-pointer">
        {label}
      </span>
    </Link>
  );
}