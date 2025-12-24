"use client"

import Image from "next/image"

export default function MobileAbout() {
  return (
    <section id="mobile-about" className="relative" style={{ backgroundColor: "#FAF0E6" }}>
      <div className="py-8 sm:py-10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent mb-1 font-semibold">
              About Me
            </p>
            <p className="text-sm text-muted-foreground mb-1">DG realtors &bull; Since 2008</p>
            <h2 className="font-serif text-foreground text-xl sm:text-2xl font-medium leading-tight mb-1">
              Dattaram B Gorivale
            </h2>
            <p className="text-sm text-accent font-medium">Proprietor &bull; Property Consultants</p>
          </div>

          {/* Quote */}
          <div className="flex justify-center mb-5">
            <blockquote className="border-l-3 border-accent pl-4 py-1">
              <p className="font-serif text-foreground/80 text-lg italic">"Sign of Trust"</p>
            </blockquote>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 max-w-md mx-auto">
            For over 17 years, DG Realtors has helped businesses in Maharashtra find the right retail and office spaces.
            Our commitment to integrity and personalized service ensures you secure a location that perfectly matches
            your specific requirements.
          </p>

          {/* Stats */}
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <p className="font-serif text-3xl font-medium text-foreground">17+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Years Experience</p>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="aspect-[4/5] w-[180px] sm:w-[220px] rounded-xl overflow-hidden shadow-xl relative z-10">
                <Image
                  src="/images/owners-about-me-pic.jpg"
                  alt="Dattaram B Gorivale - Proprietor of DG Realtors"
                  fill
                  loading="lazy"
                  sizes="220px"
                  className="object-cover pointer-events-none select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 bg-secondary rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #F5DEB3 100%)",
        }}
      />
    </section>
  )
}
