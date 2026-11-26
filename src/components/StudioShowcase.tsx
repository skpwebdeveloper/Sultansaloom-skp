import { ArrowUpRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface StudioShowcaseProps {
  onBookGroom: () => void;
}

export function StudioShowcase({ onBookGroom }: StudioShowcaseProps) {
  return (
    <section id="gallery" className="py-16 lg:py-24 border-b border-[#E4DFD5] bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-medium tracking-wide text-[#9E763B] mb-2">
              Studio &amp; Groom Gallery
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#171614] text-balance">
              Inside SULTANS Salon, Sheikhupura
            </h2>
          </div>

          <p className="text-sm text-[#4A463F] max-w-md leading-relaxed">
            Real moments from our Opposite Stadium Road floor — featuring bespoke groom wedding
            transformations and gold-mirrored styling stations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Photo 1: Groom Styling */}
          <article className="rounded-xl border border-[#E4DFD5] bg-[#F4F0E8] overflow-hidden flex flex-col">
            <div className="aspect-[4/4] sm:aspect-[5/5] w-full overflow-hidden bg-[#1E1C1A] border-b border-[#E4DFD5]">
              <ResilientImage
                src="/assets/aistudio/saloon2-pik-pg_29fa83b0.jpg"
                alt="Groom prepared at SULTANS Salon Sheikhupura in traditional sherwani and pagri"
                className="w-full h-full object-cover object-top"
                fallbackTitle="Groom Styling · SULTANS Salon"
              />
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#6B655B] mb-1.5">
                  01. Wedding &amp; Groom Preparation
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#171614] mb-2">
                  Signature Groom Styling &amp; Skin Finish
                </h3>
                <p className="text-sm leading-relaxed text-[#4A463F]">
                  Complete baraat and walima groom preparation including precision haircut, beard
                  sculpting, brightening facial care, and studio finishing inside our Sheikhupura
                  branch.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4DFD5] flex items-center justify-between gap-4">
                <span className="text-xs text-[#57524A]">Photographed in-studio</span>
                <button
                  type="button"
                  onClick={onBookGroom}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171614] hover:text-[#9E763B] py-1.5 px-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E763B]"
                >
                  <span>Book Groom Styling</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>

          {/* Photo 2: Salon Floor & Mirrors */}
          <article className="rounded-xl border border-[#E4DFD5] bg-[#F4F0E8] overflow-hidden flex flex-col">
            <div className="aspect-[4/4] sm:aspect-[5/5] w-full overflow-hidden bg-[#1E1C1A] border-b border-[#E4DFD5]">
              <ResilientImage
                src="/assets/aistudio/saloon-pik-pg_32006592.jpg"
                alt="Inside SULTANS Salon Sheikhupura showing gold-framed mirrors and active styling chairs"
                className="w-full h-full object-cover object-center"
                fallbackTitle="Salon Floor · Opposite Stadium Road"
              />
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#6B655B] mb-1.5">
                  02. Opposite Stadium Road Floor
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#171614] mb-2">
                  Gold-Mirrored Styling Bays &amp; Lounge
                </h3>
                <p className="text-sm leading-relaxed text-[#4A463F]">
                  Dedicated barbering, hair coloring, and treatment chairs inside our air-conditioned
                  Stadium Road studio, kept clean and active from morning until 1:00 AM.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4DFD5] flex items-center justify-between gap-4">
                <span className="text-xs text-[#57524A]">Sheikhupura, Punjab</span>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171614] hover:text-[#9E763B] py-1.5 px-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Visit Location</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
