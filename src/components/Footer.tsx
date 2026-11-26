import { SALON_INFO } from '../data/salonData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11100E] text-[#B8B1A6] border-t border-[#262420]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href="#top"
            className="font-display text-lg font-semibold text-[#FAF8F5] tracking-tight"
          >
            {SALON_INFO.name}
          </a>
          <p className="text-xs text-[#8D867C] mt-1">
            {SALON_INFO.addressLine1}, {SALON_INFO.city} · {SALON_INFO.hoursShort}
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs">
          <a href="#treatments" className="hover:text-[#FAF8F5] transition-colors">
            Treatments
          </a>
          <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
            Services
          </a>
          <a href="#reviews" className="hover:text-[#FAF8F5] transition-colors">
            Reviews
          </a>
          <a href="#visit" className="hover:text-[#FAF8F5] transition-colors">
            Book Appointment
          </a>
          <a
            href={SALON_INFO.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FAF8F5] transition-colors"
          >
            Google Listing
          </a>
        </nav>

        <div className="text-xs text-[#6B655B] tabular-nums">
          © {currentYear} {SALON_INFO.name}
        </div>
      </div>
    </footer>
  );
}
