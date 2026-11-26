import { STUDIO_PILLARS } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

export function CapabilitiesBento() {
  const [primaryPillar, ...secondaryPillars] = STUDIO_PILLARS;

  return (
    <section id="treatments" className="py-16 lg:py-24 border-b border-[#E4DFD5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium tracking-wide text-[#9E763B] mb-2">
            Signature Disciplines
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#171614] text-balance mb-4">
            Three specialized studios under one roof.
          </h2>
          <p className="text-base text-[#4A463F] leading-relaxed">
            Every appointment begins with a focused texture, scalp, or skin assessment so each
            treatment delivers durable results rather than hurried routine maintenance.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Marquee 2-column feature */}
          <article className="lg:col-span-7 rounded-xl border border-[#E4DFD5] bg-[#F4F0E8] overflow-hidden flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#1E1C1A] border-b border-[#E4DFD5]">
              <ResilientImage
                src={primaryPillar.imageUrl}
                alt={primaryPillar.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={primaryPillar.title}
              />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-[#6B655B] mb-2">
                  <span>{primaryPillar.number}</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{primaryPillar.subtitle}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#171614] mb-3">
                  {primaryPillar.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4A463F] mb-6">
                  {primaryPillar.description}
                </p>
              </div>

              <ul className="pt-5 border-t border-[#E4DFD5] space-y-2 text-sm text-[#171614]">
                {primaryPillar.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#9E763B] font-mono text-xs mt-1" aria-hidden="true">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Stacked secondary editorial pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryPillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-xl border border-[#E4DFD5] bg-[#FAF8F5] overflow-hidden flex-1 flex flex-col sm:flex-row lg:flex-col"
              >
                <div className="sm:w-2/5 lg:w-full aspect-[4/3] lg:aspect-[16/9] overflow-hidden bg-[#1E1C1A] border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b border-[#E4DFD5] shrink-0">
                  <ResilientImage
                    src={pillar.imageUrl}
                    alt={pillar.imageAlt}
                    className="w-full h-full object-cover"
                    fallbackTitle={pillar.title}
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs font-medium text-[#6B655B] mb-1.5">
                      <span>{pillar.number}</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>{pillar.subtitle}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#171614] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4A463F] mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E4DFD5] text-xs text-[#57524A]">
                    {pillar.highlights.join(' · ')}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
