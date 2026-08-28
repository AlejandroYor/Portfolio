// Projects (sticky stacking cards) + Contact + Footer

const PROJECTS = [
  { n: "01", titleKey: "p6.title", typeKey: "p6.type", year: "2026",
    descKey: "p6.desc", stack: ["Next.js 15", "Tailwind", "Supabase", "Node.js", "Fastify", "Vercel AI SDK", "MiniMax", "Flutter", "pgvector"],
    href: "https://nomad-centinela-v2.vercel.app/", github: "https://github.com/shigerudev/HackIndies", post: "https://www.linkedin.com/feed/update/urn:li:activity:7462319677088899072/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvgqkIB3LvIpzuv24vY4O8HqboQdkfuCEg",
    color: "linear-gradient(180deg, #04111f 0%, #0b3b66 45%, #2bc6ff 100%)", accent: "#7de2ff", artwork: "nomadLogo", dark: true },
  { n: "02", titleKey: "p2.title", typeKey: "p2.type", year: "2024",
    descKey: "p2.desc", stack: ["JavaScript", "wa.me API", "Netlify"],
    href: "https://antojitosgt.netlify.app/",
    color: "linear-gradient(180deg, #fff5eb 0%, #f7dcc0 45%, #f2b07a 100%)",
    accent: "#d8502b", artwork: "antojitosLogo" },
  { n: "03", titleKey: "p3.title", typeKey: "p3.type", year: "2024",
    descKey: "p3.desc", stack: ["HTML", "CSS", "JavaScript"],
    href: "https://alejandroyor.github.io/salud-y-bienestar/", github: "https://github.com/AlejandroYor/salud-y-bienestar",
    color: "linear-gradient(180deg, #100905 0%, #20110c 48%, #b76a2b 100%)", accent: "#ffb57c", artwork: "saludLogo", dark: true },
  { n: "04", titleKey: "p5.title", typeKey: "p5.type", year: "2026",
    descKey: "p5.desc", stack: ["JavaScript", "Charts", "Open Data"],
    href: "https://alejandroyor.github.io/guate-transparente/",
    github: "https://github.com/AlejandroYor/guate-transparente",
    color: "linear-gradient(180deg, #061013 0%, #0d1f27 45%, #142c31 100%)",
    accent: "#41efd4", artwork: "chart", dark: true },
  { n: "05", titleKey: "p4.title", typeKey: "p4.type", yearKey: "p4.year",
    descKey: "p4.desc", stack: ["APIs", "Logs", "Integrations"],
    href: null, color: "var(--bg-2)", accent: "var(--accent)", artwork: "terminal" },
];

function ArtPhone() {
  return (
    <div style={{
      width: 220, height: 440, borderRadius: 36,
      background: "var(--bg)", border: "8px solid #1a1a1a",
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
            fontFamily: "Kanit, sans-serif", fontSize: 11, color: "var(--fg)",
          }}>
            <span>{it.n}</span><span style={{ color: "var(--accent)" }}>{it.p}</span>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{
          padding: "12px", borderRadius: 14, background: "var(--accent)",
          color: "var(--bg)", fontFamily: "Kanit, sans-serif", fontWeight: 600, fontSize: 12,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          send to whatsapp <Icon.Arrow size={14} />
        </div>
      </div>
    </div>
  );
}

function ArtAntojitosLogo() {
  return (
    <div style={{
      width: 360, height: 320, borderRadius: 22, overflow: "hidden",
      background: "linear-gradient(180deg, #fbf5ea 0%, #f3e7d6 100%)",
      border: "1px solid rgba(60,40,30,0.06)", boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      padding: 18,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 120, height: 120, position: "relative" }}>
          <svg viewBox="0 0 120 120" width="120" height="120" style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M60,8 C88,8 110,30 110,58 C110,86 88,108 60,108 C32,108 10,86 10,58 C10,30 32,8 60,8 Z" fill="#f05a24" />
            <circle cx="82" cy="30" r="14" fill="#ffffff" />
            <ellipse cx="40" cy="78" rx="28" ry="18" fill="rgba(255,255,255,0.06)" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 32, fontWeight: 800, color: "#3b271f", lineHeight: 1 }}>{/* title */}
            antojitos gt
          </div>
          <div style={{ marginTop: 6, fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#6aa84f", textTransform: "lowercase" }}>
            whatsapp ordering
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtSaludLogo() {
  return (
    <div style={{
      width: 340, height: 320, borderRadius: 30, overflow: "hidden",
      background: "linear-gradient(180deg, #0f0907 0%, #1f110c 48%, #c87335 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 30px 90px rgba(0,0,0,0.42)",
      position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 18%, rgba(255,160,90,0.18), transparent 24%), radial-gradient(circle at 70% 75%, rgba(255,140,60,0.12), transparent 24%)",
        pointerEvents: "none",
      }} />
      <div style={{
        width: 280, padding: 24, borderRadius: 28, background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.12)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.17)",
        backdropFilter: "blur(10px)", position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
      }}>
        <div style={{
          width: 90, height: 90, borderRadius: 30, background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
          border: "1px solid rgba(255,255,255,0.18)", display: "grid", placeItems: "center",
          boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
        }}>
          <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="saludMark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffbb72" />
                <stop offset="100%" stopColor="#ff8d3f" />
              </linearGradient>
            </defs>
            <path d="M20 14 C20 10 25 8 29 8 H35 C39 8 44 10 44 14 V23 C44 44 36 52 28 52 C19 52 14 44 14 34 C14 24 20 14 20 14 Z" fill="url(#saludMark)" />
            <path d="M31 19 L31 45" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            <path d="M19 31 L45 31" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center" }}>
          <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1.05 }}>
            salud y
          </div>
          <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 44, fontWeight: 900, color: "#ffcd9c", lineHeight: 1, letterSpacing: "-0.05em" }}>
            Bienestar
          </div>
          <div style={{ marginTop: 6, fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.72)", textTransform: "uppercase" }}>
            catalog & contact site
          </div>
        </div>
        <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.14)", marginTop: 6 }} />
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.16em" }}>
          2024 · wellness distributor
        </div>
      </div>
    </div>
  );
}

function ArtBrowser({ light = true }) {
  return (
    <div style={{
      width: 360, borderRadius: 14, overflow: "hidden",
      background: light ? "var(--cream-2)" : "var(--bg-2)",
      border: `1px solid ${light ? "rgba(140,110,80,0.22)" : "rgba(255,255,255,0.10)"}`,
      boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
      transform: "rotate(4deg)",
    }}>
      <div style={{
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: `1px solid ${light ? "rgba(140,110,80,0.22)" : "rgba(255,255,255,0.10)"}`,
        background: light ? "var(--cream-2)" : "var(--bg)",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <div style={{
          marginLeft: 12, flex: 1, padding: "4px 10px", borderRadius: 6,
          background: light ? "var(--cream-2)" : "var(--bg-2)",
          border: `1px solid ${light ? "rgba(140,110,80,0.22)" : "rgba(255,255,255,0.08)"}`,
          fontFamily: "JetBrains Mono, monospace", fontSize: 9.5,
          color: light ? "rgba(12,12,12,0.6)" : "rgba(242,235,220,0.6)",
        }}>alejandroyor.github.io/salud-y-bienestar</div>
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ height: 14, width: "60%", background: light ? "var(--bg)" : "var(--fg)", borderRadius: 4 }} />
        <div style={{ height: 8, width: "85%", background: light ? "rgba(12,12,12,0.18)" : "rgba(242,235,220,0.18)", borderRadius: 4 }} />
        <div style={{ height: 8, width: "70%", background: light ? "rgba(12,12,12,0.18)" : "rgba(242,235,220,0.18)", borderRadius: 4 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              aspectRatio: "1", borderRadius: 8,
              background: `repeating-linear-gradient(45deg, ${light ? "#E0D2B0" : "var(--bg)"}, ${light ? "#E0D2B0" : "var(--bg)"} 4px, ${light ? "var(--cream-2)" : "var(--bg-2)"} 4px, ${light ? "var(--cream-2)" : "var(--bg-2)"} 8px)`,
              border: `1px solid ${light ? "rgba(140,110,80,0.22)" : "rgba(255,255,255,0.08)"}`,
            }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <div style={{ height: 24, flex: 1, borderRadius: 6, background: "var(--accent)" }} />
          <div style={{ height: 24, flex: 1, borderRadius: 6, background: light ? "rgba(12,12,12,0.08)" : "rgba(242,235,220,0.08)" }} />
        </div>
      </div>
    </div>
  );
}

function ArtNomadLogo() {
  return (
    <div style={{
      width: 360, height: 320, borderRadius: 28, overflow: "hidden",
      background: "linear-gradient(180deg, #04111f 0%, #0b3b66 45%, #2bc6ff 100%)",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.32)", transform: "rotate(-2deg)",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at top left, rgba(60,198,255,0.2), transparent 28%), radial-gradient(circle at bottom right, rgba(114,242,255,0.18), transparent 24%)",
        opacity: 0.9,
      }} />
      <div style={{
        position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
        padding: 24, color: "rgba(255,255,255,0.95)", textAlign: "center",
      }}>
        <div style={{
          width: 120, height: 120, borderRadius: 32,
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)",
          display: "grid", placeItems: "center",
          boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 18,
            background: "linear-gradient(135deg, rgba(60,198,255,0.95), rgba(1,104,170,0.95))",
            display: "grid", placeItems: "center",
            boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.25)",
          }}>
            <div style={{
              width: 34, height: 42, borderRadius: 10,
              background: "rgba(255,255,255,0.95)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 80%, 50% 100%, 0% 80%, 0% 25%)",
            }} />
          </div>
        </div>
        <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 27, fontWeight: 600, letterSpacing: "-0.03em" }}>NOMAD</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>
          CENTINELA
        </div>
      </div>
    </div>
  );
}

function ArtChart() {
  const bars = [60, 80, 45, 92, 70, 55, 88];
  return (
    <div style={{
      width: 380, borderRadius: 18, overflow: "hidden",
      background: "linear-gradient(180deg, #061116 0%, #0a232b 44%, #112f35 100%)",
      border: "1px solid rgba(65, 237, 212, 0.12)",
      boxShadow: "0 28px 70px rgba(4, 18, 20, 0.32)", transform: "rotate(-2deg)",
    }}>
      <div style={{
        padding: "12px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(65, 237, 212, 0.08)", background: "rgba(7, 22, 29, 0.96)",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#38ffc8" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d8b7" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#23a391" }} />
        <div style={{
          marginLeft: 12, flex: 1, padding: "5px 12px", borderRadius: 8,
          background: "rgba(8, 30, 36, 0.9)",
          border: "1px solid rgba(65, 237, 212, 0.12)",
          fontFamily: "JetBrains Mono, monospace", fontSize: 9.5,
          color: "rgba(225, 248, 240, 0.7)",
        }}>alejandroyor.github.io/guate-transparente</div>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 700, color: "#e9f9f4", letterSpacing: "0.06em", textTransform: "uppercase" }}>Gasto público GT</div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "rgba(229, 249, 242, 0.66)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Q · 2026 · transparencia
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 16, height: 100 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: "8px 8px 3px 3px",
              background: i === 3 ? "#41efd4" : "rgba(255,255,255,0.14)",
              opacity: i === 3 ? 1 : 0.82,
              boxShadow: i === 3 ? "0 10px 24px rgba(65, 237, 212, 0.24)" : "none",
            }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(225, 248, 240, 0.65)" }}>
          {["E","F","M","A","M","J","J"].map((m, i) => (
            <span key={i} style={{ color: i === 3 ? "#41efd4" : "rgba(225, 248, 240, 0.55)" }}>{m}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 18 }}>
          {[
            { k: "TOTAL", v: "Q 18.4B", accent: "#ffffff" },
            { k: "VARIACIÓN", v: "+4.2%", accent: "#41efd4" },
          ].map(s => (
            <div key={s.k} style={{
              padding: "12px 14px", borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(65, 237, 212, 0.12)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
            }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8.5, color: "rgba(225, 248, 240, 0.55)", letterSpacing: "0.16em" }}>{s.k}</div>
              <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 20, fontWeight: 700, color: s.accent, marginTop: 4 }}>{s.v}</div>
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
    { p: ">", t: "[INFO]  retry attempt 3/5 · 1.2s", c: "rgba(242,235,220,0.55)" },
    { p: ">", t: "[OK]    auth refresh · token rotated", c: "var(--accent)" },
    { p: ">", t: "[OK]    queue drained · 4123 events", c: "var(--accent)" },
    { p: "$", t: "echo 'incident resolved.'", c: "var(--fg)" },
  ];
  return (
    <div style={{
      width: 380, borderRadius: 14, overflow: "hidden",
      background: "var(--bg)", border: "1px solid rgba(255,255,255,0.10)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
      transform: "rotate(-3deg)",
    }}>
      <div style={{
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(255,255,255,0.08)", background: "var(--bg-2)",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <span style={{ marginLeft: 8, fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(242,235,220,0.5)" }}>
          ~/incidents/INC-4423
        </span>
      </div>
      <div style={{ padding: 18, fontFamily: "JetBrains Mono, monospace", fontSize: 11, lineHeight: 1.7 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "rgba(242,235,220,0.35)" }}>{l.p}</span>
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
      background: "var(--bg)", border: "1px solid rgba(12,12,12,0.10)",
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
        fontFamily: "Kanit, sans-serif", fontSize: 36, fontWeight: 300, lineHeight: 1, color: "var(--fg)", textTransform: "lowercase",
      }}>hi, i'm <span style={{ color: "var(--accent)", fontWeight: 600 }}>alex</span>.</div>
      <div style={{
        position: "absolute", right: 24, top: 24, padding: "4px 10px", borderRadius: 999,
        background: "var(--accent)", color: "var(--bg)", fontFamily: "JetBrains Mono, monospace", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
      }}>LIVE</div>
    </div>
  );
}

function ProjectCard({ p, i, total }) {
  const { t } = useT();
  const isDark = p.dark || p.color === "var(--bg)" || p.color === "var(--bg-2)";
  const fg = isDark ? "var(--fg)" : "var(--bg)";
  const fgMuted = isDark ? "rgba(242,235,220,0.65)" : "rgba(12,12,12,0.65)";
  const accentFg = p.accent;
  const art = {
    grid: <ArtGrid />,
    phone: <ArtPhone />,
    browser: <ArtBrowser light />,
    chart: <ArtChart />,
    terminal: <ArtTerminal />,
    nomadLogo: <ArtNomadLogo />,
    saludLogo: <ArtSaludLogo />,
    antojitosLogo: <ArtAntojitosLogo />,
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
          color: isDark ? "rgba(242,235,220,0.4)" : "rgba(12,12,12,0.4)",
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

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
            {p.href && (
              <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "10px 16px", borderRadius: 999,
                fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 500,
                color: accentFg, textDecoration: "none",
                border: `1px solid ${accentFg}`,
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(12,12,12,0.06)",
                textTransform: "lowercase",
              }}>
                {t("projects.visit")}
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 28, height: 28, borderRadius: "50%",
                  background: accentFg, color: isDark ? "var(--bg)" : "var(--fg)",
                }}>
                  <Icon.Arrow size={12} />
                </span>
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                padding: "10px 16px", borderRadius: 999,
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 500,
                color: accentFg, textDecoration: "none",
                border: `1px solid ${accentFg}`,
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(12,12,12,0.06)",
                textTransform: "lowercase",
              }}>
                {t("projects.github")}
              </a>
            )}
            {p.post && (
              <a href={p.post} target="_blank" rel="noopener noreferrer" style={{
                padding: "10px 16px", borderRadius: 999,
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 500,
                color: accentFg, textDecoration: "none",
                border: `1px solid ${accentFg}`,
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(12,12,12,0.06)",
                textTransform: "lowercase",
              }}>
                {t("projects.linkedin")}
              </a>
            )}
            {!p.href && !p.github && !p.post && (
              <span style={{
                fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.15em",
                color: fgMuted, marginTop: 6,
              }}>{t("projects.internal")}</span>
            )}
          </div>
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
    <section id="projects" style={{ position: "relative", padding: "140px 32px 0", background: "var(--bg)" }}>
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
                letterSpacing: "-0.04em", margin: 0, color: "var(--fg)", textTransform: "lowercase",
              }}>
                {t("projects.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(242,235,220,0.5)" }}>{t("projects.titleItalic")}</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p style={{
              maxWidth: 320, margin: 0, fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.55,
              color: "rgba(242,235,220,0.6)", textWrap: "pretty",
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
    <section id="contact" style={{ position: "relative", padding: "160px 32px 80px", background: "var(--bg)", overflow: "hidden" }}>
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
            letterSpacing: "-0.045em", margin: 0, color: "var(--fg)", textTransform: "lowercase",
          }}>
            <span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(242,235,220,0.5)" }}>{t("contact.title1")}</span>
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
            color: "rgba(242,235,220,0.7)", textWrap: "pretty",
          }}>
            {t("contact.lead")}
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div className="contact-buttons" style={{ marginTop: 44, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <ContactButton href={wa} variant="primary" external icon={<Icon.WhatsApp size={11} />}>{t("contact.wa")}</ContactButton>
            {[
              { href: "mailto:jjolone1@gmail.com", iconEl: <Icon.Mail size={11} />, label: t("contact.email"), gradient: "rgba(239, 68, 68, 0.1), rgba(244, 67, 54, 0.05)", border: "rgba(239, 68, 68, 0.3)", hoverGradient: "rgba(239, 68, 68, 0.2), rgba(244, 67, 54, 0.1)" },
              { href: "https://www.linkedin.com/in/alejandro-jol%C3%B3n-282649186/", iconEl: <Icon.LinkedIn size={11} />, label: t("contact.linkedin"), gradient: "rgba(0, 119, 181, 0.1), rgba(0, 119, 181, 0.05)", border: "rgba(0, 119, 181, 0.3)", hoverGradient: "rgba(0, 119, 181, 0.2), rgba(0, 119, 181, 0.1)", external: true },
              { href: "https://www.behance.net/alejandrojolon", iconEl: <Icon.Behance size={11} />, label: t("contact.behance"), gradient: "rgba(50, 50, 50, 0.1), rgba(80, 80, 80, 0.05)", border: "rgba(100, 100, 100, 0.3)", hoverGradient: "rgba(50, 50, 50, 0.2), rgba(80, 80, 80, 0.1)", external: true },
              { href: "https://www.youtube.com/@josealejandrojolonescoto6077", iconEl: <Icon.YouTube size={11} />, label: "youtube", gradient: "rgba(255, 0, 0, 0.1), rgba(192, 0, 0, 0.05)", border: "rgba(255, 0, 0, 0.3)", hoverGradient: "rgba(255, 0, 0, 0.2), rgba(192, 0, 0, 0.1)", external: true },
            ].map((btn, i) => (
              <div key={i}
                style={{
                  padding: "14px 22px 14px 24px", borderRadius: 999,
                  background: `linear-gradient(135deg, ${btn.gradient})`,
                  border: `1px solid ${btn.border}`,
                  transition: "all 280ms ease",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${btn.hoverGradient})`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${btn.gradient})`;
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <a href={btn.href} target={btn.external ? "_blank" : undefined} rel={btn.external ? "noopener noreferrer" : undefined} style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  fontFamily: "Kanit, sans-serif", fontWeight: 500, fontSize: 15,
                  color: "var(--fg)", textDecoration: "none", textTransform: "lowercase",
                  padding: 0, background: "transparent", border: "none", cursor: "pointer",
                }}>
                  <span>{btn.label}</span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 22, height: 22, borderRadius: "50%",
                    background: "rgba(242,235,220,0.14)", color: "var(--fg)",
                    transition: "all 280ms ease",
                  }}>
                    {btn.iconEl}
                  </span>
                </a>
              </div>
            ))}
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
              { k: t("contact.wa_k"), v: "+502 3313 6025" },
              { k: t("contact.loc_k"), v: t("contact.loc_v") },
              { k: t("contact.time_k"), v: `${hh}:${mm}:${ss}`, mono: true },
            ].map((c) => (
              <div key={c.k} style={{
                padding: "26px 22px", background: "var(--bg)",
                display: "flex", flexDirection: "column", gap: 8, textAlign: "left",
              }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.18em", color: "rgba(242,235,220,0.45)" }}>{c.k}</span>
                <span style={{
                  fontFamily: c.mono ? "JetBrains Mono, monospace" : "Kanit, sans-serif",
                  fontSize: c.mono ? 18 : 16, fontWeight: 400,
                  color: "var(--fg)",
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
    <footer style={{ background: "var(--bg)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "32px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap",
        fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(242,235,220,0.4)", letterSpacing: "0.1em",
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
