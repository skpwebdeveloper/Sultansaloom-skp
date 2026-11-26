import { ArrowRight, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="top" className="border-b border-[#E4DFD5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* 2-Column Stretched Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet unboxed regional metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#6B655B] mb-5">
                <span>Sheikhupura, Punjab</span>
                <span aria-hidden="true">·</span>
                <span>Opposite Stadium Road</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Open Daily until 1:00 AM</span>
              </div>

              <h1 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] tracking-tight font-semibold text-[#171614] text-balance mb-6">
                Precision Hair, Scalp Science &amp; Grooming in Sheikhupura.
              </h1>

              <p className="text-base sm:text-[17px] leading-[1.65] text-[#4A463F] max-w-xl mb-8">
                SULTANS Salon brings consultation-led haircuts, global &amp; ombre coloring,
                clinical PRP and laser scalp restoration, and calm skincare treatments together
                opposite Stadium Park.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#FAF8F5] bg-[#171614] hover:bg-[#9E763B] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E763B] focus-visible:ring-offset-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center min-h-[44px] text-sm font-medium text-[#171614] hover:text-[#9E763B] underline underline-offset-4 decoration-[#C8C0B2] hover:decoration-[#9E763B] transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Service Menu
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E4DFD5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B655B]">
              <span>Walk-ins welcome &amp; late-night appointments available</span>
              <a
                href={SALON_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#171614] hover:text-[#9E763B] transition-colors whitespace-nowrap"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Full-height Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] rounded-xl overflow-hidden border border-[#E4DFD5] bg-[#1E1C1A]">
              <ResilientImage
                src="/src/assets/images/hero_sultans_salon_1795674637280.jpg"
                alt="Interior of SULTANS Salon featuring brushed brass mirrors, travertine reception, and tailored leather styling chairs"
                className="w-full h-full lg:h-full object-cover"
                fallbackTitle="SULTANS Salon · Sheikhupura"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof & Key Facts Strip */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E4DFD5] rounded-xl bg-[#F4F0E8] divide-y sm:divide-y-0 sm:divide-x divide-[#E4DFD5]">
          <div className="p-5 sm:p-6">
            <div className="text-xs font-medium text-[#6B655B] mb-1">Client Rating</div>
            <div className="font-display text-2xl font-semibold text-[#171614] tabular-nums">
              {SALON_INFO.rating} / {SALON_INFO.ratingScale}
            </div>
            <div className="text-xs text-[#57524A] mt-1">Verified local client reviews</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="text-xs font-medium text-[#6B655B] mb-1">Daily Hours</div>
            <div className="font-display text-2xl font-semibold text-[#171614] tabular-nums">
              9:00 AM – 1:00 AM
            </div>
            <div className="text-xs text-[#57524A] mt-1">Open Monday through Sunday</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="text-xs font-medium text-[#6B655B] mb-1">Studio Location</div>
            <div className="font-display text-xl font-semibold text-[#171614]">
              Opposite Stadium Road
            </div>
            <div className="text-xs text-[#57524A] mt-1">Near Stadium Park, Sheikhupura</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="text-xs font-medium text-[#6B655B] mb-1">Direct Desk</div>
            <a
              href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="font-display text-2xl font-semibold text-[#171614] hover:text-[#9E763B] transition-colors tabular-nums block"
            >
              {SALON_INFO.primaryPhone}
            </a>
            <div className="text-xs text-[#57524A] mt-1">Call or WhatsApp for priority slots</div>
          </div>
        </div>
      </div>
    </section>
  );
}
