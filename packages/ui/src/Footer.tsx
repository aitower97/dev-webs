export function Footer({
  businessName,
  address,
  phone,
  email,
  navItems,
}: {
  businessName: string;
  address: string;
  phone: string;
  email?: string;
  navItems: { label: string; href: string }[];
}) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-white">{businessName}</h3>
            <p className="mt-3 text-sm leading-6">{address}</p>
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${phone}`}
                className="block text-sm hover:text-white"
              >
                {phone}
              </a>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="block text-sm hover:text-white"
                >
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horario placeholder */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Horario
            </h3>
            <p className="mt-4 text-sm leading-6">
              Lunes a Viernes: 9:00 - 19:00
              <br />
              Sábados: 10:00 - 14:00
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {businessName}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
