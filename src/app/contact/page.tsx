"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio-data";
import { Testimonials } from "@/components/testimonials";
import { WatermarkDamien } from "@/components/watermark";
import { Marquee } from "@/components/marquee";

const TIME_SLOTS = [
  "09:00 AM - 10:30 AM",
  "11:00 AM - 12:30 PM",
  "02:00 PM - 03:30 PM",
  "04:30 PM - 06:00 PM (Golden Hour)",
  "06:30 PM - 08:00 PM (Sunset / Studio)",
];

const SERVICES_OPTIONS = [
  "Portrait Photography Session",
  "Wedding & Elopement Coverage",
  "Event & Gala Documentation",
  "Commercial & Product Shoot",
  "Architecture & Fine Art Commission",
];

export default function ContactPage() {
  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date(2026, 10, 25)); // Nov 2026
  const [selectedDay, setSelectedDay] = useState<number>(28);
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[3]);
  const [selectedService, setSelectedService] = useState<string>(SERVICES_OPTIONS[0]);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Month navigation
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const formattedSelectedDate = `${monthNames[month]} ${selectedDay}, ${year}`;

  const recipientEmail = "oluonisamuel8@gmail.com";
  const rawSubject = `[Appointment Booking] ${selectedService} - ${formattedSelectedDate} (${selectedTime})`;
  const rawBody =
    `Hello ${SITE_CONFIG.name},\n\nI would like to book a photography session with you:\n\n` +
    `• Service: ${selectedService}\n` +
    `• Requested Date: ${formattedSelectedDate}\n` +
    `• Requested Time: ${selectedTime}\n` +
    `• Client Name: ${name || "[Name]"}\n` +
    `• Client Email: ${email || "[Email]"}\n` +
    `• Client Phone: ${phone || "[Phone]"}\n\n` +
    `Session Details / Location Notes:\n${message || "No additional notes."}\n\n` +
    `Looking forward to confirming our appointment,\n${name}`;

  const emailSubjectEncoded = encodeURIComponent(rawSubject);
  const emailBodyEncoded = encodeURIComponent(rawBody);

  // 1. Standard mailto link for desktop mail clients (Apple Mail, Outlook, etc.)
  const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubjectEncoded}&body=${emailBodyEncoded}`;

  // 2. Direct web Gmail compose link (works in ANY browser without needing desktop mail app configured!)
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    recipientEmail
  )}&su=${emailSubjectEncoded}&body=${emailBodyEncoded}`;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // 1. Synchronously trigger compose so browser popup blockers do not intercept the user click
    try {
      const opened = window.open(gmailComposeLink, "_blank");
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        window.location.href = mailtoLink;
      }
    } catch {
      window.location.href = mailtoLink;
    }

    // 2. Fire direct email notification to opey271@gmail.com via formsubmit
    fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: rawSubject,
        _replyto: email,
        name: name,
        email: email,
        phone: phone,
        service: selectedService,
        date: formattedSelectedDate,
        time: selectedTime,
        message: message || "No additional notes",
      }),
    }).catch((err) => console.warn("Email dispatch notice:", err));

    // 3. Log to local Next.js API route
    fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        service: selectedService,
        date: formattedSelectedDate,
        time: selectedTime,
        message,
      }),
    }).catch((err) => console.warn("Local API booking notice:", err));
  };

  const copyAppointmentSummary = () => {
    const text =
      `Appointment Request for ${SITE_CONFIG.name}\n` +
      `Recipient: ${recipientEmail}\n` +
      `Date: ${formattedSelectedDate}\n` +
      `Time: ${selectedTime}\n` +
      `Service: ${selectedService}\n` +
      `Client: ${name} (${email}, ${phone})\n` +
      `Notes: ${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-8 md:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Banner matching Screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              CONTACT &amp; BOOKING
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-none mb-4">
              GET IN TOUCH WITH OSO
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
              Book your photography session directly on our live calendar, or reach out directly by phone and email. Every appointment dossier is delivered straight to the photographer.
            </p>
          </div>

          <div className="relative w-full md:w-96 aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)]">
            <Image
              src="/images/contact/IMG_5403.JPG"
              alt="Photographer with camera"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* DIRECT CHANNELS (Phone & Email click-to-contact directly) */}
        <div className="mb-14 pb-12 border-b border-[var(--border-card)]">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
            DIRECT CONTACT INFORMATION
          </span>
          <p className="text-xs sm:text-sm text-[var(--text-sub)] mb-6 max-w-xl">
            Need an immediate response? Call the photographer directly or click below to launch your email client or web Gmail instantly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Direct Phone */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="group p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                    Call Photographer
                  </span>
                  <span className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-purple transition-colors">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct Email (opens Gmail or Default Mail client) */}
            <div className="p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] flex flex-col justify-between">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)] break-all">
                    {recipientEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-card)]">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 px-2.5 rounded-lg bg-brand-purple text-white text-[11px] font-bold uppercase tracking-wider hover:bg-brand-purpleHover transition-colors flex items-center justify-center gap-1"
                >
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={`mailto:${recipientEmail}`}
                  className="flex-1 text-center py-1.5 px-2.5 rounded-lg border border-[var(--border-card)] text-[var(--text-primary)] text-[11px] font-bold uppercase tracking-wider hover:border-[var(--text-primary)] transition-colors"
                >
                  Mail App
                </a>
              </div>
            </div>

            {/* Studio Location */}
            <div className="p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] flex items-center gap-3.5">
              <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                  Studio Location
                </span>
                <span className="text-base font-bold text-[var(--text-primary)]">
                  {SITE_CONFIG.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CALENDAR BOOKING SYSTEM */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              APPOINTMENT CALENDAR
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              SELECT DATE &amp; BOOK YOUR SESSION
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-2">
              Choose your date and time slot. When you confirm, the booking will be sent directly to <strong>{recipientEmail}</strong>.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
              <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] uppercase">
                Appointment Request Ready!
              </h3>
              <p className="text-sm text-[var(--text-sub)] max-w-lg mx-auto">
                Thank you, <strong>{name}</strong>! Your session request for <strong>{selectedService}</strong> on <strong>{formattedSelectedDate}</strong> at <strong>{selectedTime}</strong> has been prepared for <strong>{recipientEmail}</strong>.
              </p>

              <div className="p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Photographer:</span>
                  <strong className="text-[var(--text-primary)]">{SITE_CONFIG.name}</strong>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Send To:</span>
                  <strong className="text-[var(--text-primary)]">{recipientEmail}</strong>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Service:</span>
                  <strong className="text-[var(--text-primary)]">{selectedService}</strong>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Date:</span>
                  <strong className="text-[var(--text-primary)]">{formattedSelectedDate}</strong>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Time Slot:</span>
                  <strong className="text-[var(--text-primary)]">{selectedTime}</strong>
                </div>
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>Client:</span>
                  <strong className="text-[var(--text-primary)]">{name} ({phone || email})</strong>
                </div>
              </div>

              {/* 1-Click Send Actions */}
              <div className="space-y-3 pt-2">
                <span className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  Choose how you want to send your request:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* Option 1: Gmail Webmail (Zero app setup needed!) */}
                  <a
                    href={gmailComposeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple text-white text-xs uppercase tracking-wider font-bold hover:bg-brand-purpleHover transition-colors shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Gmail in Browser</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Option 2: Native Mail App (Apple Mail, Outlook) */}
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] text-xs uppercase tracking-wider font-bold hover:border-[var(--text-primary)] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Default Mail App</span>
                  </a>

                  {/* Option 3: Copy Details */}
                  <button
                    onClick={copyAppointmentSummary}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] text-xs uppercase tracking-wider font-bold hover:border-[var(--text-primary)] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied to Clipboard" : "Copy Details"}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Calendar Month View (5 cols) */}
              <div className="lg:col-span-5 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8">
                {/* Month Navigation */}
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-card)] mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-brand-purple" />
                    <span className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      {monthNames[month]} {year}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="p-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="p-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Day Names Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] mb-3">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>

                {/* Days Matrix */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {/* Empty slots before first day */}
                  {Array.from({ length: firstDayIndex }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-10" />
                  ))}

                  {/* Day Buttons */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNumber = i + 1;
                    const isSelected = selectedDay === dayNumber;
                    return (
                      <button
                        key={dayNumber}
                        type="button"
                        onClick={() => setSelectedDay(dayNumber)}
                        className={`h-10 w-full rounded-xl text-xs font-semibold flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-brand-purple text-white shadow-md font-bold scale-105"
                            : "text-[var(--text-primary)] hover:bg-[var(--bg-card-inner)] hover:border border-[var(--border-card)]"
                        }`}
                      >
                        {dayNumber}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Date Summary */}
                <div className="mt-6 pt-6 border-t border-[var(--border-card)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Selected Date:</span>
                  <span className="font-bold text-[var(--text-primary)]">{formattedSelectedDate}</span>
                </div>
              </div>

              {/* Right Column: Time Slots, Service, and Contact Info Form (7 cols) */}
              <div className="lg:col-span-7 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-10">
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* 1. Time Slot Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-purple" />
                      <span>Available Time Slots</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const isChosen = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                              isChosen
                                ? "border-brand-purple bg-brand-purple/15 text-[var(--text-primary)] font-bold shadow-sm"
                                : "border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-sub)] hover:border-[var(--border-hover)]"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Service Category */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                      Select Photography Offering
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--bg-card)]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                        Your Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* 4. Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>

                  {/* 5. Message / Project Notes */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                      Session Details &amp; Location Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your session concept, requested location, number of subjects, or event timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] hover:text-brand-purple transition-colors disabled:opacity-50"
                    >
                      <span>{submitting ? "PREPARING BOOKING..." : "CONFIRM & BOOK APPOINTMENT"}</span>
                      <span className="p-3 rounded-full bg-brand-purple text-white shadow-md">
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </button>
                    <span className="block text-[11px] text-[var(--text-muted)] mt-2">
                      Will deliver directly to {recipientEmail} via Gmail or Mail App
                    </span>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Watermark & Marquee */}
      <WatermarkDamien />
      <Marquee />
    </div>
  );
}
