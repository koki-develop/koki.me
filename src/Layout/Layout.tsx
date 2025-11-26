import { NavLink, Outlet } from "react-router";

const navItems: { name: string; href: string }[] = [
  { name: "About", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Notes", href: "/notes" },
];

export default function Layout() {
  return (
    <div>
      <header className="py-4 md:py-8">
        <nav>
          <ul className="flex justify-end gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "text-slate-50" : "text-slate-400"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer className="flex items-center justify-center py-16">
        <small className="text-sm text-slate-400">&copy; 2025 Koki Sato</small>
      </footer>
    </div>
  );
}
