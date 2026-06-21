import { BUSINESS } from "@/lib/constants";

export function RestaurantFooter({
  navItems,
}: {
  navItems: { label: string; href: string }[];
}) {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-2xl font-extrabold">{BUSINESS.name}</span>
            <p className="mt-4 text-sm leading-6 text-primary-200">
              {BUSINESS.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">Enlaces</h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-primary-200 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">Contacto</h3>
            <div className="mt-4 space-y-3 text-sm text-primary-200">
              <p>{BUSINESS.address}</p>
              <a href={`tel:${BUSINESS.phoneClean}`} className="block hover:text-white">{BUSINESS.phone}</a>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">@{BUSINESS.instagram}</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">Horario</h3>
            <div className="mt-4 text-sm text-primary-200 leading-7">
              <p>{BUSINESS.hours.weekdays}</p>
              <p>{BUSINESS.hours.saturday}</p>
              <p>{BUSINESS.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-800 pt-8 text-center text-xs text-primary-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.legalName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
