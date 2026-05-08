
// ── CV Download Section ──────────────────────────────────────────────────
function CVSection() {
  const { t } = useT();
  return (
    <section id="cv" style={{
      position: "relative",
      padding: "80px 32px 80px",
      background: "var(--cream, #EFE4CC)",
      color: "var(--bg, #14110D)",
      overflow: "hidden",
    }}>
      {/* bg watermark */}
      <div aria-hidden style={{
        position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)",
        fontFamily: "Kanit, sans-serif", fontWeight: 700,
        fontSize: "clamp(140px, 24vw, 320px)",
        lineHeight: 1, letterSpacing: "-0.06em",
        color: "rgba(12,12,12,0.05)",
        whiteSpace: "nowrap", pointerEvents: "none", textTransform: "lowercase",
        userSelect: "none",
      }}>cv</div>

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        {/* main card */}
        <FadeIn delay={150}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
            gap: 2,
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid rgba(12,12,12,0.10)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
          }} className="cv-card">
            {/* left — identity */}
            <div style={{
              background: "var(--bg, #14110D)",
              color: "var(--fg, #F2EBDC)",
              padding: "48px 48px",
              display: "flex", flexDirection: "column", gap: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  overflow: "hidden", border: "2px solid var(--accent)", flexShrink: 0,
                }}>
                  <img src="assets/portrait.png" alt="Alejandro Jolon"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 600, fontSize: 22, color: "var(--fg)", lineHeight: 1.1 }}>Alejandro Jol&#243;n</div>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginTop: 4, textTransform: "uppercase" }}>{t("cv.role")}</div>
                </div>
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1,
                background: "rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden",
              }}>
                {[
                  { k: t("cv.d1k"), v: t("cv.d1v") },
                  { k: t("cv.d2k"), v: t("cv.d2v") },
                  { k: t("cv.d3k"), v: t("cv.d3v") },
                  { k: t("cv.d4k"), v: t("cv.d4v") },
                ].map((d, i) => (
                  <div key={i} style={{ padding: "18px 20px", background: "var(--bg)" }}>
                    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, letterSpacing: "0.18em", color: "rgba(242,235,220,0.4)" }}>{d.k}</div>
                    <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 400, fontSize: 14.5, color: "var(--fg)", marginTop: 4 }}>{d.v}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(242,235,220,0.35)", letterSpacing: "0.12em" }}>{t("cv.updated")}</div>
            </div>

            {/* right — download CTA */}
            <div style={{
              background: "var(--cream-2, #E6D9BC)",
              padding: "48px 48px",
              display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 32,
            }}>
              {/* doc preview */}
              <div style={{
                width: "100%", borderRadius: 18,
                background: "#fff", border: "1px solid rgba(12,12,12,0.08)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                padding: "24px 24px 20px",
                fontFamily: "Kanit, sans-serif",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#14110D" }}>Alejandro Jol&#243;n</div>
                    <div style={{ fontSize: 11, color: "rgba(12,12,12,0.5)", marginTop: 2 }}>TSE · Data Engineer · Full Stack</div>
                  </div>
                  <div style={{
                    padding: "4px 10px", borderRadius: 999,
                    background: "var(--accent)", color: "#EFE4CC",
                    fontFamily: "JetBrains Mono, monospace", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
                  }}>PDF</div>
                </div>
                {[85, 72, 90, 60, 78, 55, 82].map((w, i) => (
                  <div key={i} style={{
                    height: i === 3 ? 1 : 7,
                    width: i === 3 ? "100%" : `${w}%`,
                    background: i === 3 ? "rgba(12,12,12,0.07)" : `rgba(12,12,12,${i < 2 ? 0.14 : 0.07})`,
                    borderRadius: 4, marginBottom: i === 3 ? 10 : 8, marginTop: i === 3 ? 8 : 0,
                  }} />
                ))}
              </div>

              {/* download button */}
              <a
                href="assets/cv-alejandro-jolon.pdf"
                download
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", padding: "18px 22px",
                  background: "var(--bg, #14110D)", color: "var(--fg, #F2EBDC)",
                  borderRadius: 16, textDecoration: "none",
                  fontFamily: "Kanit, sans-serif", fontWeight: 500, fontSize: 16,
                  textTransform: "lowercase",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
                  transition: "transform 280ms ease, box-shadow 280ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.28)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.20)"; }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: 10,
                    background: "var(--accent)", color: "var(--cream, #EFE4CC)",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </span>
                  {t("cv.btn")}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { CVSection });
