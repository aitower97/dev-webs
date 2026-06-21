import Image from "next/image";

export function DialsaFooter({
  navItems,
}: {
  navItems: { label: string; href: string }[];
}) {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-blanco.png"
              alt="Dialsa - Piscinas y Calefacción"
              width={280}
              height={100}
              className="h-20 w-auto"
            />
            <p className="mt-4 text-sm leading-6 text-primary-200">
              Empresa familiar en Colmenar Viejo. Piscinas, calefacción, riego,
              fontanería y aire acondicionado.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">
              Contacto
            </h3>
            <div className="mt-4 space-y-3 text-sm text-primary-200">
              <p>Av. de Los Remedios, 6</p>
              <p>28770 Colmenar Viejo, Madrid</p>
              <a href="tel:918451784" className="block hover:text-white">
                918 45 17 84
              </a>
              <a
                href="https://www.instagram.com/dialsa.pyc"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                @dialsa.pyc
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-300">
              Horario
            </h3>
            <div className="mt-4 text-sm text-primary-200 leading-7">
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-800 pt-8 text-center text-xs text-primary-400">
          <p>&copy; {new Date().getFullYear()} Piscinas y Calefacción Dialsa S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
