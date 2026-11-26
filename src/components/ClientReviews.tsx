import { Star } from 'lucide-react';
import { CLIENT_REVIEWS, SALON_INFO } from '../data/salonData';

export function ClientReviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 border-b border-[#E4DFD5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-medium tracking-wide text-[#9E763B] mb-2">
              Client Proof
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#171614] text-balance">
              Rated 4.9 / 5.0 across Sheikhupura visits.
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#4A463F]">
            <div className="flex items-center gap-0.5 text-[#9E763B]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="tabular-nums font-medium text-[#171614]">
              {SALON_INFO.rating} average
            </span>
            <span aria-hidden="true">·</span>
            <span>Consultation, hygiene &amp; evening flexibility</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="p-6 sm:p-7 rounded-xl border border-[#E4DFD5] bg-[#F4F0E8] flex flex-col justify-between gap-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#6B655B] mb-4">
                  <span>{review.service}</span>
                  <span className="font-mono tabular-nums text-[#171614]">{review.rating}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#171614]">“{review.quote}”</p>
              </div>

              <footer className="pt-4 border-t border-[#E4DFD5]">
                <div className="text-sm font-semibold text-[#171614]">{review.author}</div>
                <div className="text-xs text-[#57524A] mt-0.5">{review.outcome}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
