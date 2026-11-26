import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Clock, ExternalLink, MapPin, MessageSquare, Phone } from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, TIME_SLOTS } from '../data/salonData';

interface BookingSectionProps {
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
}

interface BookingErrors {
  name?: string;
  phone?: string;
  date?: string;
}

export function BookingSection({ selectedServiceId, onServiceChange }: BookingSectionProps) {
  const todayIso = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(todayIso);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[4]); // 05:30 PM default
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<BookingErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (submittedRef) {
      setSubmittedRef(null);
    }
    // Reset confirmation only when user explicitly switches selected service externally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedServiceId]);

  const activeService =
    SALON_SERVICES.find((item) => item.id === selectedServiceId) ?? SALON_SERVICES[0];

  const validate = (): boolean => {
    const nextErrors: BookingErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const digits = phone.replace(/[^\d+]/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Enter a valid mobile number (e.g. 0310 1489947).';
    }
    if (!date) {
      nextErrors.date = 'Choose a preferred date.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const referenceCode = `SLT-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(referenceCode);
  };

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum SULTANS Salon, I would like to book "${activeService.name}" on ${date} at ${timeSlot}.\nName: ${name || 'Guest'}\nPhone: ${phone || 'Pending'}${notes ? `\nNotes: ${notes}` : ''}`
  );
  const whatsappHref = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="visit" className="py-16 lg:py-24 bg-[#171614] text-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 rounded-xl border border-[#2D2B27] bg-[#1E1C1A] p-6 sm:p-8">
            <div className="text-xs font-medium tracking-wide text-[#C59B5F] mb-2">
              Reservations &amp; Consultations
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#FAF8F5] text-balance mb-2">
              Book Your Chair at SULTANS Salon
            </h2>
            <p className="text-sm text-[#B8B1A6] mb-8">
              Reserve your slot online and send your booking summary directly to our reception desk
              on Stadium Road.
            </p>

            {submittedRef ? (
              <div className="rounded-xl border border-[#3B372F] bg-[#171614] p-6 sm:p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[#C59B5F] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-mono tabular-nums text-[#C59B5F] mb-1">
                      Booking Reference · {submittedRef}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#FAF8F5]">
                      Request Ready for Confirmation
                    </h3>
                    <p className="text-sm text-[#B8B1A6] mt-1">
                      {name} — {activeService.name} on{' '}
                      <span className="tabular-nums text-[#FAF8F5]">{date}</span> at{' '}
                      <span className="tabular-nums text-[#FAF8F5]">{timeSlot}</span>.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2D2B27] flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#171614] bg-[#C59B5F] hover:bg-[#D4AE74] rounded-md transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FAF8F5] border border-[#3B372F] hover:bg-[#2A2723] rounded-md transition-colors whitespace-nowrap tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {SALON_INFO.primaryPhone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="text-xs text-[#B8B1A6] hover:text-[#FAF8F5] underline underline-offset-4 px-2 py-2 cursor-pointer"
                  >
                    Edit details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-medium text-[#D6D0C6] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Ali Raza"
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-md bg-[#171614] border border-[#3B372F] text-[#FAF8F5] placeholder:text-[#6B655B] focus:outline-none focus:border-[#C59B5F] focus:ring-1 focus:ring-[#C59B5F]"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-[#E58D7D]">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-medium text-[#D6D0C6] mb-2"
                    >
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="0310 1489947"
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-md bg-[#171614] border border-[#3B372F] text-[#FAF8F5] placeholder:text-[#6B655B] tabular-nums focus:outline-none focus:border-[#C59B5F] focus:ring-1 focus:ring-[#C59B5F]"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[#E58D7D]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-medium text-[#D6D0C6] mb-2"
                    >
                      Treatment / Service
                    </label>
                    <select
                      id="booking-service"
                      value={selectedServiceId}
                      onChange={(e) => onServiceChange(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-md bg-[#171614] border border-[#3B372F] text-[#FAF8F5] focus:outline-none focus:border-[#C59B5F] focus:ring-1 focus:ring-[#C59B5F]"
                    >
                      {SALON_SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-medium text-[#D6D0C6] mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      min={todayIso}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }));
                      }}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-md bg-[#171614] border border-[#3B372F] text-[#FAF8F5] tabular-nums focus:outline-none focus:border-[#C59B5F] focus:ring-1 focus:ring-[#C59B5F]"
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs text-[#E58D7D]">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-medium text-[#D6D0C6] mb-2">
                    Preferred Time Slot (Open 9:00 AM – 1:00 AM)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const active = timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`min-h-[40px] px-3 py-2 text-xs font-mono tabular-nums rounded-md border transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B5F] ${
                            active
                              ? 'bg-[#C59B5F] text-[#171614] border-[#C59B5F] font-semibold'
                              : 'bg-[#171614] text-[#D6D0C6] border-[#3B372F] hover:border-[#6B655B]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-medium text-[#D6D0C6] mb-2"
                  >
                    Consultation Notes (Optional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention hair color goals, scalp concerns, or event timing..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-[#171614] border border-[#3B372F] text-[#FAF8F5] placeholder:text-[#6B655B] focus:outline-none focus:border-[#C59B5F] focus:ring-1 focus:ring-[#C59B5F]"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3.5 text-sm font-semibold text-[#171614] bg-[#C59B5F] hover:bg-[#D4AE74] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B5F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1C1A]"
                  >
                    Prepare Appointment Request
                  </button>

                  <span className="text-xs text-[#8D867C]">
                    No upfront deposit required for consultations
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Address, Hours & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[#2D2B27] bg-[#1E1C1A] p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-medium tracking-wide text-[#C59B5F] mb-2">
                  Visit the Studio
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#FAF8F5]">
                  {SALON_INFO.name}
                </h3>
                <p className="text-sm text-[#B8B1A6] mt-1">
                  Conveniently situated opposite Stadium Road in Sheikhupura with late-night hours
                  every day of the week.
                </p>
              </div>

              <div className="space-y-5 pt-5 border-t border-[#2D2B27] text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-4 h-4 text-[#C59B5F] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-medium text-[#FAF8F5]">{SALON_INFO.addressLine1}</div>
                    <div className="text-[#B8B1A6] mt-0.5">{SALON_INFO.addressLine2}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#C59B5F] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-[#FAF8F5]">Monday – Sunday</div>
                    <div className="text-[#B8B1A6] tabular-nums mt-0.5">
                      {SALON_INFO.hoursShort}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#C59B5F] shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-1">
                    <a
                      href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                      className="block font-medium text-[#FAF8F5] hover:text-[#C59B5F] transition-colors tabular-nums"
                    >
                      {SALON_INFO.primaryPhone}
                    </a>
                    <a
                      href={`tel:${SALON_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                      className="block text-[#B8B1A6] hover:text-[#C59B5F] transition-colors tabular-nums"
                    >
                      {SALON_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#2D2B27] flex flex-wrap gap-3">
                <a
                  href={SALON_INFO.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#FAF8F5] border border-[#3B372F] hover:border-[#C59B5F] hover:text-[#C59B5F] rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Open Google Profile &amp; Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#FAF8F5] border border-[#3B372F] hover:border-[#C59B5F] hover:text-[#C59B5F] rounded-md transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
