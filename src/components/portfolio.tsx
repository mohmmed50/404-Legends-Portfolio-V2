import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ImageWipeReveal } from "@/components/image-wipe-reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10 py-24 lg:py-32">
        <ScrollReveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-brand-300">
            PORTFOLIO
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-fg">
            Brand &amp; visual identity
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-fg-muted">
            The 404 Legends mark itself — how the identity was explored,
            refined, and adapted across light and dark contexts.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Feature: primary dark lockup */}
          <ImageWipeReveal className="lg:col-span-2">
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-2">
              <div className="relative aspect-16/10 sm:aspect-21/9">
                <Image
                  src="/brand/lockup-dark.png"
                  alt="404 Legends primary logo lockup on a dark background, with the icon mark, wordmark, and tagline &ldquo;Premium Software Solutions&rdquo;"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-5 top-5 rounded-full border border-line bg-ink/80 px-3 py-1.5 font-mono text-[0.65rem] tracking-wide text-ink-fg opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                  PRIMARY MARK
                </span>
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-6 py-4">
                <span className="text-sm font-medium text-ink-fg">
                  Primary Lockup
                </span>
                <span className="font-mono text-xs text-ink-fg-muted">
                  DARK CONTEXT
                </span>
              </figcaption>
            </figure>
          </ImageWipeReveal>

          {/* Circular badge, light context */}
          <ImageWipeReveal>
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper-2">
              <div className="relative aspect-square">
                <Image
                  src="/brand/badge-light.png"
                  alt="404 Legends circular badge lockup on a light background, featuring the icon mark and the slogan &ldquo;Where 404 Becomes Legend.&rdquo;"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-5 top-5 rounded-full border border-line bg-ink/80 px-3 py-1.5 font-mono text-[0.65rem] tracking-wide text-ink-fg opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                  BADGE MARK
                </span>
              </div>
              <figcaption className="flex items-center justify-between border-t border-line bg-ink-2 px-6 py-4">
                <span className="text-sm font-medium text-ink-fg">
                  Circular Badge
                </span>
                <span className="font-mono text-xs text-ink-fg-muted">
                  LIGHT CONTEXT
                </span>
              </figcaption>
            </figure>
          </ImageWipeReveal>

          {/* Mark on dark tile */}
          <ScrollReveal delay={0.04}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-ink-3">
              <div className="relative flex aspect-4/3 items-center justify-center">
                <Image
                  src="/brand/mark.png"
                  alt="404 Legends icon mark on a dark tile"
                  width={160}
                  height={160}
                  className="h-32 w-32 transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-36"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-6 py-4">
                <span className="text-sm font-medium text-ink-fg">Mark</span>
                <span className="font-mono text-xs text-ink-fg-muted">
                  DARK
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Mark on light tile */}
          <ScrollReveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-paper">
              <div className="relative flex aspect-4/3 items-center justify-center">
                <Image
                  src="/brand/mark.png"
                  alt="404 Legends icon mark on a light tile"
                  width={160}
                  height={160}
                  className="h-32 w-32 transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-36"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line bg-ink-2 px-6 py-4">
                <span className="text-sm font-medium text-ink-fg">Mark</span>
                <span className="font-mono text-xs text-ink-fg-muted">
                  LIGHT
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Detail crop */}
          <ScrollReveal delay={0.16}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-ink-2">
              <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden">
                <Image
                  src="/brand/mark.png"
                  alt="Close-up detail of the 404 Legends mark geometry"
                  width={340}
                  height={340}
                  className="h-56 w-56 scale-[2] opacity-95 transition-transform duration-700 hover:scale-[2.15]"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-6 py-4">
                <span className="text-sm font-medium text-ink-fg">Detail</span>
                <span className="font-mono text-xs text-ink-fg-muted">
                  GEOMETRY
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>

        {/* Project case studies — placeholder for real client work */}
        <div className="mt-20">
          <ScrollReveal className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-brand-300">
              SELECTED WORK
            </span>
            <h3 className="mt-4 font-display font-semibold text-2xl text-ink-fg">
              Case studies
            </h3>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Web Platform", "Mobile Application", "Enterprise System"].map(
              (label, i) => (
                <ScrollReveal key={label} delay={i * 0.06}>
                  <div className="flex h-full min-h-56 flex-col justify-between rounded-2xl border border-dashed border-line p-7">
                    <span className="font-mono text-xs text-ink-fg-muted">
                      {label.toUpperCase()}
                    </span>
                    <div>
                      <p className="font-display text-lg text-ink-fg-muted">
                        Case study coming soon
                      </p>
                      <p className="mt-1.5 text-sm text-ink-fg-muted/70">
                        This slot is reserved for a detailed write-up of a
                        real 404 Legends engagement.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
