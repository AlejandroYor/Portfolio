// Hero, Nav, Marquee

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

function Nav({ onContact, accent }) {
  const [scrolled, setScrolled] = useStateH(false);
  const { t } = useT();
  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { id: "about", label: t("nav.about") },
  { id: "skills", label: t("nav.skills") },
  { id: "projects", label: t("nav.projects") },
  { id: "contact", label: t("nav.contact") }];

  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 8px 8px 22px",
        borderRadius: 999,
        background: scrolled ? "rgba(20,20,20,0.72)" : "rgba(20,20,20,0.42)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "background 300ms ease",
        fontFamily: "Kanit, sans-serif"
      }}>
      
      <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--fg)", textDecoration: "none", paddingRight: 14, borderRight: "1px solid rgba(255,255,255,0.10)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }} />
        <span className="nav-logo-text" style={{ fontWeight: 600, letterSpacing: "0.02em", fontSize: 14 }}>alejandro<span style={{ color: "rgba(242,235,220,0.5)", fontWeight: 300 }}>.dev</span></span>
      </a>
      <ul style={{ display: "flex", gap: 2, listStyle: "none", margin: 0, padding: "0 6px" }}>
        {links.map((l) =>
        <li key={l.id}>
            <a
            href={`#${l.id}`}
            style={{
              display: "inline-block",
              padding: "8px 14px",
              color: "rgba(242,235,220,0.78)",
              textDecoration: "none",
              fontSize: 13.5,
              fontWeight: 400,
              borderRadius: 999,
              transition: "color 200ms ease, background 200ms ease"
            }}
            onMouseEnter={(e) => {e.currentTarget.style.color = "var(--fg)";e.currentTarget.style.background = "rgba(255,255,255,0.06)";}}
            onMouseLeave={(e) => {e.currentTarget.style.color = "rgba(242,235,220,0.78)";e.currentTarget.style.background = "transparent";}}>
            
              {l.label}
            </a>
          </li>
        )}
      </ul>
      <LangSwitch />
      <ContactButton href="#contact" variant="primary" style={{ padding: "9px 16px 9px 18px", fontSize: 13 }}>{t("nav.contactBtn")}</ContactButton>
    </nav>);

}

function GridBackdrop() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
        "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, #000 35%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, #000 35%, transparent 75%)",
        pointerEvents: "none"
      }} />);


}

function GlowBlob() {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute", top: "10%", left: "55%", width: 720, height: 720, borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--accent) 35%, transparent), transparent 60%)",
        filter: "blur(80px)", opacity: 0.55, animation: "blobFloat 16s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "-10%", width: 540, height: 540, borderRadius: "50%",
        background: "radial-gradient(circle at 60% 50%, color-mix(in oklch, var(--accent) 18%, #1a3d2e), transparent 60%)",
        filter: "blur(100px)", opacity: 0.6, animation: "blobFloat2 22s ease-in-out infinite"
      }} />
    </div>);

}

function StatusChip({ children }) {
  return (
    <div className="status-chip" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "7px 14px 7px 12px", borderRadius: 999,
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)",
      color: "rgba(242,235,220,0.85)", fontSize: 12.5, fontFamily: "Kanit, sans-serif", fontWeight: 400, letterSpacing: "0.02em"
    }}>
      <span style={{ position: "relative", width: 8, height: 8 }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)" }} />
        <span style={{ position: "absolute", inset: -3, borderRadius: "50%", background: "var(--accent)", opacity: 0.4, animation: "pulse 1.8s ease-out infinite" }} />
      </span>
      {children}
    </div>);

}

function PortraitCard() {
  const { t } = useT();
  return (
    <FadeIn delay={300} y={32}>
      <div className="hero-portrait" style={{ position: "relative", width: "100%", maxWidth: 360, marginInline: "auto" }}>
        {/* card */}
        <div style={{
          position: "relative",
          aspectRatio: "1 / 1.05",
          borderRadius: 28,
          overflow: "hidden",
          background: "linear-gradient(180deg, #1a1a1a 0%, #0e0e0e 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
        }}>
          {/* subtle scanlines / accent gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 30% 20%, color-mix(in oklch, var(--accent) 28%, transparent), transparent 60%)",
            opacity: 0.7
          }} />
          <img
            src="assets/portrait.png"
            alt="Alejandro Jolón"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.45))" }} />
          
          {/* corner brackets */}
          {[
          { top: 14, left: 14, borderTop: 1, borderLeft: 1 },
          { top: 14, right: 14, borderTop: 1, borderRight: 1 },
          { bottom: 14, left: 14, borderBottom: 1, borderLeft: 1 },
          { bottom: 14, right: 14, borderBottom: 1, borderRight: 1 }].
          map((c, i) => {
            const s = { width: 18, height: 18, position: "absolute" };
            const b = "1px solid var(--accent)";
            const css = { ...s, ...c };
            if (c.borderTop) css.borderTop = b;
            if (c.borderLeft) css.borderLeft = b;
            if (c.borderRight) css.borderRight = b;
            if (c.borderBottom) css.borderBottom = b;
            return <span key={i} style={css} />;
          })}
          {/* label badge */}
          <div style={{
            position: "absolute", left: 16, bottom: 16,
            display: "flex", flexDirection: "column", gap: 4,
            padding: "10px 14px", borderRadius: 14,
            background: "rgba(12,12,12,0.72)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.10)"
          }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em" }}>ID_0042</span>
            <span style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, color: "var(--fg)", fontWeight: 500 }}>Alejandro Jolón</span>
          </div>
          <div style={{
            position: "absolute", right: 16, top: 16,
            padding: "6px 10px", borderRadius: 999,
            background: "rgba(12,12,12,0.72)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.10)",
            fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(242,235,220,0.8)", letterSpacing: "0.12em"
          }}>GT · UTC-6</div>
        </div>
        {/* floating mini cards */}
        <div className="portrait-mini-left" style={{
          position: "absolute", left: -28, bottom: 80,
          padding: "10px 14px", borderRadius: 14,
          background: "var(--fg)", color: "var(--bg)",
          fontFamily: "Kanit, sans-serif", fontSize: 12.5, fontWeight: 500,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", gap: 8,
          animation: "floaty 5s ease-in-out infinite"
        }}>
          <Icon.Wrench size={14} /> {t("hero.badge.support")}
        </div>
        <div className="portrait-mini-right" style={{
          position: "absolute", right: -22, top: 50,
          padding: "10px 14px", borderRadius: 14,
          background: "var(--bg)", color: "var(--accent)",
          border: "1px solid rgba(255,255,255,0.12)",
          fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 500,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", gap: 8,
          animation: "floaty 6s ease-in-out -2s infinite"
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} /> 200 OK
        </div>
      </div>
    </FadeIn>);

}

function HeroSection({ heroVariant = "split" }) {
  const { t } = useT();
  // Variants: split (default) | grid | terminal
  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", paddingTop: 120, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, overflow: "hidden" }}>
      <GridBackdrop />
      <GlowBlob />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn delay={50}><StatusChip>{t("hero.available")}</StatusChip></FadeIn>

        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: heroVariant === "split" ? "minmax(0, 1fr) 360px" : "minmax(0,1fr)",
          gap: 60, alignItems: "end", marginTop: 28
        }}>
          <div>
            <h1 className="hero-heading" style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(56px, 11vw, 168px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "var(--fg)",
              textTransform: "lowercase"
            }}>
              <FadeIn as="span" delay={100} y={40}><span>{t("hero.hi")}</span></FadeIn>
              <FadeIn as="span" delay={200} y={40}><span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(242,235,220,0.55)" }}>{t("hero.im")}</span></FadeIn>
              <FadeIn as="span" delay={300} y={40}>
                <span style={{ position: "relative", display: "inline-block", fontWeight: 600 }}>
                  alejandro
                  <span style={{ position: "absolute", left: 0, right: 0, bottom: "0.06em", height: "0.08em", background: "var(--accent)", borderRadius: 2 }} />
                </span>
              </FadeIn>
              <FadeIn as="span" delay={400} y={40}><span style={{ color: "var(--accent)" }}>.</span></FadeIn>
            </h1>

            <FadeIn delay={500}>
              <p className="hero-tagline" style={{
                marginTop: 32, maxWidth: 560,
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: 18, lineHeight: 1.5,
                color: "rgba(242,235,220,0.72)",
                textTransform: "lowercase"
              }}>
                {t("hero.tagline")} <span style={{ color: "var(--fg)", fontWeight: 400 }}>{t("hero.taglineBold")}</span> {t("hero.taglineEnd")}
              </p>
            </FadeIn>

            <FadeIn delay={650}>
              <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <ContactButton href="#contact" variant="primary">{t("hero.cta1")}</ContactButton>
                <ContactButton href="#projects" variant="ghost">{t("hero.cta2")}</ContactButton>
              </div>
            </FadeIn>

            {/* meta strip */}
            <FadeIn delay={800}>
              <div className="hero-meta" style={{
                marginTop: 70, display: "flex", flexWrap: "wrap", gap: "28px 56px",
                paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "Kanit, sans-serif"
              }}>
                {[
                { k: t("hero.meta.currently"), v: t("hero.meta.currentlyV"), sub: t("hero.meta.currentlySub") },
                { k: t("hero.meta.based"), v: t("hero.meta.basedV"), sub: t("hero.meta.basedSub") },
                { k: t("hero.meta.exp"), v: t("hero.meta.expV"), sub: t("hero.meta.expSub") },
                { k: t("hero.meta.stack"), v: t("hero.meta.stackV"), sub: t("hero.meta.stackSub") }].
                map((m) =>
                <div key={m.k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.18em", color: "rgba(242,235,220,0.45)", textTransform: "uppercase" }}>{m.k}</span>
                    <span style={{ fontSize: 17, color: "var(--fg)", fontWeight: 400 }}>{m.v}</span>
                    <span style={{ fontSize: 12, color: "rgba(242,235,220,0.5)" }}>{m.sub}</span>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {heroVariant === "split" && <PortraitCard />}
        </div>
      </div>

      {/* scroll indicator */}
      <FadeIn delay={1000}>
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(242,235,220,0.4)", letterSpacing: "0.18em"
        }}>
          SCROLL
          <span style={{ width: 1, height: 32, background: "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)" }} />
        </div>
      </FadeIn>
    </section>);

}

Object.assign(window, { Nav, HeroSection, PortraitCard, StatusChip });