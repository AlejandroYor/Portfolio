// Projects (sticky stacking cards) + Contact + Footer

const PROJECTS = [
  { n: "01", titleKey: "p1.title", typeKey: "p1.type", yearKey: null, year: "2025",
    descKey: "p1.desc", stack: ["React", "Tailwind", "Framer Motion"],
    href: null, color: "#E9F5C6", accent: "#0C0C0C", artwork: "grid" },
  { n: "02", titleKey: "p2.title", typeKey: "p2.type", year: "2024",
    descKey: "p2.desc", stack: ["JavaScript", "wa.me API", "Netlify"],
    href: "https://antojitosgt.netlify.app/", color: "#0C0C0C", accent: "var(--accent)", artwork: "phone" },
  { n: "03", titleKey: "p3.title", typeKey: "p3.type", year: "2024",
    descKey: "p3.desc", stack: ["HTML", "CSS", "JavaScript"],
    href: "https://alejandroyor.github.io/salud-y-bienestar/", color: "#F5F2EA", accent: "#0C0C0C", artwork: "browser" },
  { n: "04", titleKey: "p5.title", typeKey: "p5.type", year: "2026",
    descKey: "p5.desc", stack: ["JavaScript", "Charts", "Open Data"],
    href: "https://alejandroyor.github.io/guate-transparente/", color: "#F5F2EA", accent: "#0C0C0C", artwork: "chart" },
  { n: "05", titleKey: "p4.title", typeKey: "p4.type", yearKey: "p4.year",
    descKey: "p4.desc", stack: ["APIs", "Logs", "Integrations"],
    href: null, color: "#1a1a1a", accent: "var(--accent)", artwork: "terminal" },
];

function ArtPhone() {
  return (
    <div style={{
      width: 220, height: 440, borderRadius: 36,
      background: "#0C0C0C", border: "8px solid #1a1a1a",
      boxShadow: "0 30px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
      position: "relative", overflow: "hidden",
      transform: "rotate(-8deg)",
    }}>
      <div style={{
        position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
        width: 80, height: 18, borderRadius: 12, background: "#000",
      }} />
      <div style={{ padding: "44px 14px 14px", display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
        <div style={{
          padding: "10px 12px", borderRadius: 12, background: "rgba(37, 211, 102, 0.18)",
          border: "1px solid rgba(37, 211, 102, 0.4)", color: "#25D366",
          fontFamily: "Kanit, sans-serif", fontSize: 10, fontWeight: 500,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <Icon.WhatsApp size={12} /> antojitos · order
        </div>
        {[
          { n: "Tacos al pastor x2", p: "Q40" },
          { n: "Quesadilla", p: "Q22" },
          { n: "Horchata", p: "Q12" },
          { n: "Flan casero", p: "Q15" },
        ].map((it, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between",
            padding: "9px 10px", borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            fontFamily: "Kanit, sans-serif", fontSize: 11, color: "#F5F5F2",
          }}>
            <span>{it.n}</span><span style={{ color: "var(--accent)" }}>{it.p}</span>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{
          padding: "12px", borderRadius: 14, background: "var(--accent)",
          color: "#0C0C0C", fontFamily: "Kanit, sans-serif", fontWeight: 600, fontSize: 12,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          send to whatsapp <Icon.Arrow size={14} />
        </div>
      </div>
    </div>
  );
}

function ArtBrowser({ light = true }) {
  return (
    <div style={{
      width: 360, borderRadius: 14, overflow: "hidden",
      background: light ? "#FFFFFF" : "#1a1a1a",
      border: `1px solid ${light ? "#E8E6DF" : "rgba(255,255,255,0.10)"}`,
      boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
      transform: "rotate(4deg)",
    }}>
      <div style={{
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: `1px solid ${light ? "#E8E6DF" : "rgba(255,255,255,0.10)"}`,
        background: light ? "#FAFAF7" : "#0C0C0C",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <div style={{
          marginLeft: 12, flex: 1, padding: "4px 10px", borderRadius: 6,
          background: light ? "#fff" : "#1a1a1a",
          border: `1px solid ${light ? "#E8E6DF" : "rgba(255,255,255,0.08)"}`,
          fontFamily: "JetBrains Mono, monospace", fontSize: 9.5,
          color: light ? "rgba(12,12,12,0.6)" : "rgba(245,245,242,0.6)",
        }}>alejandroyor.github.io/salud-y-bienestar</div>
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ height: 14, width: "60%", background: light ? "#0C0C0C" : "#F5F5F2", borderRadius: 4 }} />
        <div style={{ height: 8, width: "85%", background: light ? "rgba(12,12,12,0.18)" : "rgba(245,245,242,0.18)", borderRadius: 4 }} />
        <div style={{ height: 8, width: "70%", background: light ? "rgba(12,12,12,0.18)" : "rgba(245,245,242,0.18)", borderRadius: 4 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              aspectRatio: "1", borderRadius: 8,
              background: `repeating-linear-gradient(45deg, ${light ? "#F0EDE3" : "#0C0C0C"}, ${light ? "#F0EDE3" : "#0C0C0C"} 4px, ${light ? "#FAFAF7" : "#1a1a1a"} 4px, ${light ? "#FAFAF7" : "#1a1a1a"} 8px)`,
              border: `1px solid ${light ? "#E8E6DF" : "rgba(255,255,255,0.08)"}`,
            }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <div style={{ height: 24, flex: 1, borderRadius: 6, background: "var(--accent)" }} />
          <div style={{ height: 24, flex: 1, borderRadius: 6, background: light ? "rgba(12,12,12,0.08)" : "rgba(245,245,242,0.08)" }} />
        </div>
      </div>
    </div>
  );
}

function ArtChart() {
  const bars = [60, 80, 45, 92, 70, 55, 88];
  return (
    <div style={{
      width: 380, borderRadius: 14, overflow: "hidden",
      background: "#FFFFFF", border: "1px solid #E8E6DF",
      boxShadow: "0 30px 60px rgba(0,0,0,0.25)", transform: "rotate(-2deg)",
    }}>
      <div style={{
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid #E8E6DF", background: "#FAFAF7",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <div style={{
          marginLeft: 12, flex: 1, padding: "4px 10px", borderRadius: 6,
          background: "#fff", border: "1px solid #E8E6DF",
          fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, color: "rgba(12,12,12,0.6)",
        }}>alejandroyor.github.io/guate-transparente</div>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 13, fontWeight: 500, color: "#0C0C0C" }}>Gasto público GT</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, color: "rgba(12,12,12,0.5)", marginTop: 2, letterSpacing: "0.08em" }}>Q · 2026 · transparencia</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 16, height: 100 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: "6px 6px 2px 2px",
              background: i === 3 ? "var(--accent)" : "#0C0C0C",
              opacity: i === 3 ? 1 : 0.78,
            }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(12,12,12,0.45)" }}>
          {["E","F","M","A","M","J","J"].map((m, i) => <span key={i}>{m}</span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14 }}>
          {[{k:"Total",v:"Q 18.4B"},{k:"Variación",v:"+4.2%"}].map(s => (
            <div key={s.k} style={{ padding: "8px 10px", borderRadius: 8, background: "#F5F2EA" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8.5, color: "rgba(12,12,12,0.55)", letterSpacing: "0.12em" }}>{s.k.toUpperCase()}</div>
              <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 500, color: "#0C0C0C" }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArtTerminal() {
  const lines = [
    { p: "$", t: "tail -f /var/log/api.log", c: "var(--accent)" },
    { p: ">", t: "[ERROR] 502 Bad Gateway · /webhook/sf", c: "#ff7066" },
    { p: ">", t: "[INFO]  retry attempt 3/5 · 1.2s", c: "rgba(245,245,242,0.55)" },
    { p: ">", t: "[OK]    auth refresh · token rotated", c: "var(--accent)" },
    { p: ">", t: "[OK]    queue drained · 4123 events", c: "var(--accent)" },
    { p: "$", t: "echo 'incident resolved.'", c: "#F5F5F2" },
  ];
  return (
    <div style={{
      width: 380, borderRadius: 14, overflow: "hidden",
      background: "#0C0C0C", border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
      transform: "rotate(-3deg)",
    }}>
      <div style={{
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#1a1a1a",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <span style={{ marginLeft: 8, fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(245,245,242,0.5)" }}>
          ~/incidents/INC-4423
        </span>
      </div>
      <div style={{ padding: 18, fontFamily: "JetBrains Mono, monospace", fontSize: 11, lineHeight: 1.7 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "rgba(245,245,242,0.35)" }}>{l.p}</span>
            <span style={{ color: l.c }}>{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtGrid() {
  return (
    <div style={{
      width: 380, height: 280, borderRadius: 14, position: "relative", overflow: "hidden",
      background: "#0C0C0C", border: "1px solid rgba(12,12,12,0.10)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.25)", transform: "rotate(2deg)",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <div style={{
        position: "absolute", left: 24, top: 24,
        fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em",
      }}>portfolio.tsx</div>
      <div style={{
        position: "absolute", left: 24, bottom: 24, right: 24,
        fontFamily: "Kanit, sans-serif", fontSize: 36, fontWeight: 300, lineHeight: 1, color: "#F5F5F2", textTransform: "lowercase",
      }}>hi, i'm <span style={{ color: "var(--accent)", fontWeight: 600 }}>alex</span>.</div>
      <div style={{
        position: "absolute", right: 24, top: 24, padding: "4px 10px", borderRadius: 999,
        background: "var(--accent)", color: "#0C0C0C", fontFamily: "JetBrains Mono, monospace", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
      }}>LIVE</div>
    </div>
  );
}

function ProjectCard({ p, i, total }) {
  const { t } = useT();
  const isDark = p.color === "#0C0C0C" || p.color === "#1a1a1a";
  const fg = isDark ? "#F5F5F2" : "#0C0C0C";
  const fgMuted = isDark ? "rgba(245,245,242,0.65)" : "rgba(12,12,12,0.65)";
  const accentFg = p.accent;
  const art = {
    grid: <ArtGrid />,
    phone: <ArtPhone />,
    browser: <ArtBrowser light />,
    chart: <ArtChart />,
    terminal: <ArtTerminal />,
  }[p.artwork];

  // sticky stacking offset — each card sticks at top with offset growing per index
  const topOffset = 100 + i * 28;

  return (
    <div style={{
      position: "sticky",
      top: topOffset,
      paddingBottom: i === total - 1 ? 0 : 12,
    }}>
      <div className="project-card" style={{
        position: "relative",
        background: p.color,
        color: fg,
        borderRadius: 28,
        padding: "48px 48px 48px",
        minHeight: 460,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
        gap: 32, alignItems: "center",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(12,12,12,0.08)"}`,
        boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
        overflow: "hidden",
      }}>
        {/* number watermark */}
        <span className="project-watermark" style={{
          position: "absolute", right: 32, top: 28,
          fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.2em",
          color: isDark ? "rgba(245,245,242,0.4)" : "rgba(12,12,12,0.4)",
        }}>{p.n} / {String(total).padStart(2, "0")}</span>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 520 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              padding: "5px 10px", borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.15em",
              background: isDark ? "rgba(255,255,255,0.08)" : "rgba(12,12,12,0.08)",
              color: fg,
            }}>{t(p.typeKey).toLowerCase()}</span>
            <span style={{
              padding: "5px 10px", borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.15em",
              background: "transparent",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.16)" : "rgba(12,12,12,0.16)"}`,
              color: fgMuted,
            }}>{(p.yearKey ? t(p.yearKey) : p.year)}</span>
          </div>

          <h3 className="project-title" style={{
            fontFamily: "Kanit, sans-serif", fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.025em",
            margin: 0, textTransform: "lowercase",
          }}>{t(p.titleKey).toLowerCase()}</h3>

          <p className="project-desc" style={{
            fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 17, lineHeight: 1.55,
            color: fgMuted, margin: 0, textWrap: "pretty",
          }}>{t(p.descKey)}</p>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.stack.map((s) => (
              <span key={s} style={{
                padding: "6px 12px", borderRadius: 999,
                fontFamily: "Kanit, sans-serif", fontSize: 12, fontWeight: 400,
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(12,12,12,0.05)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(12,12,12,0.08)"}`,
                color: fgMuted,
              }}>{s}</span>
            ))}
          </div>

          {p.href ? (
            <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 500,
              color: accentFg, textDecoration: "none", marginTop: 6,
              alignSelf: "flex-start", textTransform: "lowercase",
            }}>
              {t("projects.visit")}
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 28, height: 28, borderRadius: "50%",
                background: accentFg, color: isDark ? "#0C0C0C" : "#F5F5F2",
              }}>
                <Icon.Arrow size={12} />
              </span>
            </a>
          ) : (
            <span style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.15em",
              color: fgMuted, marginTop: 6,
            }}>{t("projects.internal")}</span>
          )}
        </div>

        {/* artwork */}
        <div className="project-art-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          {art}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const { t } = useT();
  return (
    <section id="projects" style={{ position: "relative", padding: "140px 32px 0", background: "#0C0C0C" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="projects-header" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 40, alignItems: "end", marginBottom: 60 }}>
          <FadeIn>
            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 18 }}>
                {t("projects.tag")}
              </div>
              <h2 style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.92,
                letterSpacing: "-0.04em", margin: 0, color: "#F5F5F2", textTransform: "lowercase",
              }}>
                {t("projects.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(245,245,242,0.5)" }}>{t("projects.titleItalic")}</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p style={{
              maxWidth: 320, margin: 0, fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.55,
              color: "rgba(245,245,242,0.6)", textWrap: "pretty",
            }}>
              {t("projects.intro")}
            </p>
          </FadeIn>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {PROJECTS.map((p, i) => (<ProjectCard key={p.n} p={p} i={i} total={PROJECTS.length} />))}
        </div>
      </div>
      {/* spacer so last card can fully scroll past sticky */}
      <div style={{ height: 200 }} />
    </section>
  );
}

function ContactSection({ whatsappNumber, whatsappMessage }) {
  const { t } = useT();
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  // format Guatemala time (UTC-6)
  const gtTime = new Date(time.getTime());
  const hh = String((gtTime.getUTCHours() - 6 + 24) % 24).padStart(2, "0");
  const mm = String(gtTime.getUTCMinutes()).padStart(2, "0");
  const ss = String(gtTime.getUTCSeconds()).padStart(2, "0");

  return (
    <section id="contact" style={{ position: "relative", padding: "160px 32px 80px", background: "#0C0C0C", overflow: "hidden" }}>
      {/* big background type */}
      <div aria-hidden style={{
        position: "absolute", left: "50%", bottom: 40, transform: "translateX(-50%)",
        fontFamily: "Kanit, sans-serif", fontWeight: 700, fontSize: "clamp(120px, 22vw, 340px)",
        lineHeight: 1, letterSpacing: "-0.06em", color: "rgba(255,255,255,0.018)",
        whiteSpace: "nowrap", pointerEvents: "none", textTransform: "lowercase",
      }}>let's build.</div>

      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 22 }}>
            {t("contact.tag")}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 style={{
            fontFamily: "Kanit, sans-serif", fontWeight: 300,
            fontSize: "clamp(64px, 11vw, 180px)", lineHeight: 0.92,
            letterSpacing: "-0.045em", margin: 0, color: "#F5F5F2", textTransform: "lowercase",
          }}>
            <span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(245,245,242,0.5)" }}>{t("contact.title1")}</span>
            <span style={{ position: "relative", display: "inline-block", paddingBottom: "0.12em" }}>
              {t("contact.title2")}
              <span style={{ position: "absolute", left: 0, right: 0, bottom: "0.18em", height: "0.06em", background: "var(--accent)", borderRadius: 2 }} />
            </span>
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p style={{
            marginTop: 28, maxWidth: 600, marginLeft: "auto", marginRight: "auto",
            fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 19, lineHeight: 1.55,
            color: "rgba(245,245,242,0.7)", textWrap: "pretty",
          }}>
            {t("contact.lead")}
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div className="contact-buttons" style={{ marginTop: 44, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <ContactButton href={wa} variant="primary" external icon={<Icon.WhatsApp size={11} />}>{t("contact.wa")}</ContactButton>
            <ContactButton href="mailto:jjolone1@gmail.com" variant="ghost" icon={<Icon.Mail size={11} />}>{t("contact.email")}</ContactButton>
            <ContactButton href="https://www.linkedin.com/in/alejandro-jol%C3%B3n-282649186/" variant="ghost" external icon={<Icon.LinkedIn size={11} />}>{t("contact.linkedin")}</ContactButton>
            <ContactButton href="https://www.behance.net/alejandrojolon" variant="ghost" external icon={<Icon.Behance size={11} />}>{t("contact.behance")}</ContactButton>
          </div>
        </FadeIn>

        {/* contact details strip */}
        <FadeIn delay={500}>
          <div className="contact-grid" style={{
            marginTop: 80, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 1,
            background: "rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { k: t("contact.email_k"), v: "jjolone1@gmail.com" },
              { k: t("contact.wa_k"), v: "+502 5423 1394" },
              { k: t("contact.loc_k"), v: t("contact.loc_v") },
              { k: t("contact.time_k"), v: `${hh}:${mm}:${ss}`, mono: true },
            ].map((c) => (
              <div key={c.k} style={{
                padding: "26px 22px", background: "#0C0C0C",
                display: "flex", flexDirection: "column", gap: 8, textAlign: "left",
              }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,245,242,0.45)" }}>{c.k}</span>
                <span style={{
                  fontFamily: c.mono ? "JetBrains Mono, monospace" : "Kanit, sans-serif",
                  fontSize: c.mono ? 18 : 16, fontWeight: 400,
                  color: "#F5F5F2",
                }}>{c.v}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer style={{ background: "#0C0C0C", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "32px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap",
        fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(245,245,242,0.4)", letterSpacing: "0.1em",
      }}>
        <div>© 2025 ALEJANDRO JOLÓN</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
          {t("footer.opp")}
        </div>
        <div>{t("footer.built")}</div>
      </div>
    </footer>
  );
}

Object.assign(window, { ProjectsSection, ContactSection, Footer });
