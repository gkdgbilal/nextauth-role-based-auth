import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='p-4 shadow-md bg-slate-700 shadow-slate-700'>
      <ul className='flex space-x-4 text-2xl font-bold text-white justify-evenly'>
        {[
          { href: "/", label: "Home" },
          { href: "/api/auth/signin", label: "Sign In" },
          { href: "/api/auth/signout", label: "Sign Out" },
          { href: "/server", label: "Server" },
          { href: "/client", label: "Client" },
          { href: "/extra", label: "Extra" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} className='hover:underline'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
