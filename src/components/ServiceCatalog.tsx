import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SALON_SERVICES, ServiceCategory } from '../data/salonData';

interface ServiceCatalogProps {
  onSelectService: (serviceId: string) => void;
}

const FILTER_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'hair-color', label: 'Hair & Color' },
  { id: 'scalp-therapy', label: 'Scalp Therapy' },
  { id: 'skin-grooming', label: 'Skin & Grooming' },
];

export function ServiceCatalog({ onSelectService }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? SALON_SERVICES
      : SALON_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-[#E4DFD5] bg-[#F4F0E8]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="text-xs font-medium tracking-wide text-[#9E763B] mb-2">
              Service Directory
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#171614] text-balance">
              Full Treatment Menu
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter salon services"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E8E2D6] rounded-lg border border-[#DBD3C4]"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E763B] ${
                    isActive
                      ? 'bg-[#FAF8F5] text-[#171614] shadow-xs'
                      : 'text-[#57524A] hover:text-[#171614]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 2-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E4DFD5] flex flex-col justify-between gap-4 hover:border-[#C8BFA9] transition-colors duration-150"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#6B655B] mb-2">
                  <span>{service.categoryLabel}</span>
                  <span className="font-mono tabular-nums">{service.duration}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#171614] mb-2">
                  {service.name}
                </h3>

                <p className="text-sm leading-relaxed text-[#4A463F]">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-[#ECE7DD] flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#6B655B]">{service.priceNote}</span>

                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171614] hover:text-[#9E763B] py-1.5 px-2.5 rounded-md hover:bg-[#F4F0E8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E763B]"
                >
                  <span>Reserve Slot</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
