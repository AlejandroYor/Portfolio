// ── Certifications Section ───────────────────────────────────────────────
function CertsSection() {
  const { t } = useT();

  const certs = [
    {
      name: "CompTIA Security+",
      issuer: "Udemy",
      date: "Oct. 2025",
      credId: "UC-c02b3924-4c80-44fc-b2ae-c5439c2aabe5",
      tags: ["Cybersecurity", "IT Security", "CompTIA"],
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-c02b3924-4c80-44fc-b2ae-c5439c2aabe5.jpg?v=1760728136000",
      accent: false,
    },
    {
      name: "English",
      issuer: "E4CC",
      date: "2025",
      credId: null,
      tags: ["English", "Communication", "B2+"],
      link: "https://drive.google.com/file/d/1aszUpmcv-g_jg8bGGem-fGQPYoUg9eyg/view",
      accent: false,
    },
    {
      name: "Power BI",
      issuer: "INTECAP",
      date: "May. 2023",
      credId: "11786",
      tags: ["Data Modeling", "Data Analysis", "BI"],
      link: "https://drive.google.com/file/d/12qohn8NbU8YLk3-DkHsEicxWXdILrvZ9/view",
      accent: false,
    },
    {
      name: "SQL Básico — Intermedio",
      issuer: "Udemy",
      date: "Mar. 2022",
      credId: "UC-e4f768d7-c8e0-436b-9275-fedc7e960538",
      tags: ["SQL", "Data Modeling", "Database"],
      link: "https://www.udemy.com/certificate/UC-e4f768d7-c8e0-436b-9275-fedc7e960538/",
      accent: false,
    },
  ];

  const issuerGradients = {
    "Udemy": "linear-gradient(135deg, rgba(164, 53, 240, 0.1), rgba(236, 82, 82, 0.1))", // Udemy purple to red
    "E4CC": "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))", // Blue to teal for language
    "INTECAP": "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))", // Green for institute
  };

  const issuerHoverGradients = {
    "Udemy": "linear-gradient(135deg, rgba(164, 53, 240, 0.2), rgba(236, 82, 82, 0.2))",
    "E4CC": "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
    "INTECAP": "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))",
  };

  return (
    <section id="certs" style={{
      position: "relative",
      padding: "120px 32px",
      background: "var(--bg, #14110D)",
      color: "var(--fg, #F2EBDC)",
      overflow: "hidden",
    }}>
      {/* bg watermark */}
      <div aria-hidden style={{
        position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)",
        fontFamily: "Kanit, sans-serif", fontWeight: 700,
        fontSize: "clamp(120px, 20vw, 280px)",
        lineHeight: 1, letterSpacing: "-0.06em",
        color: "rgba(242,235,220,0.03)",
        whiteSpace: "nowrap", pointerEvents: "none", textTransform: "lowercase",
        userSelect: "none",
      }}>cert</div>

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        {/* header */}
        <div style={{ marginBottom: 64 }}>
          <FadeIn>
            <div style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 11,
              letterSpacing: "0.22em", color: "rgba(242,235,220,0.4)", marginBottom: 18,
            }}>
              {t("certs.tag")}
            </div>
            <h2 style={{
              fontFamily: "Kanit, sans-serif", fontWeight: 300,
              fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.92,
              letterSpacing: "-0.04em", margin: 0, color: "var(--fg)",
              textTransform: "lowercase",
            }}>
              {t("certs.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(242,235,220,0.35)" }}>{t("certs.titleItalic")}</span><span style={{ fontWeight: 600 }}>{t("certs.title2")}</span>
            </h2>
          </FadeIn>
        </div>

        {/* grid */}
        <div className="certs-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          gap: 16,
        }}>
          {certs.map((c, i) => (
            <CertCard key={i} cert={c} i={i} t={t} gradient={issuerGradients[c.issuer]} hoverGradient={issuerHoverGradients[c.issuer]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, i, t, gradient, hoverGradient }) {
  const [hover, setHover] = React.useState(false);
  return (
    <FadeIn delay={i * 100}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          padding: "32px 36px",
          borderRadius: 20,
          background: hover ? (hoverGradient || "rgba(242,235,220,0.04)") : (gradient || "rgba(242,235,220,0.02)"),
          border: `1px solid ${cert.accent ? "var(--accent)" : "rgba(242,235,220,0.08)"}`,
          borderTop: `2px solid ${cert.accent ? "var(--accent)" : "rgba(242,235,220,0.12)"}`,
          transition: "background 280ms ease, border-color 280ms ease",
          display: "flex", flexDirection: "column", gap: 20,
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <div style={{
              fontFamily: "JetBrains Mono, monospace", fontSize: 10,
              letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 8,
            }}>
              {cert.issuer}
            </div>
            <div style={{
              fontFamily: "Kanit, sans-serif", fontWeight: 600,
              fontSize: 20, color: "var(--fg)", lineHeight: 1.2,
            }}>
              {cert.name}
            </div>
          </div>
          <div style={{
            flexShrink: 0,
            width: 40, height: 40, borderRadius: 10,
            background: cert.accent ? "var(--accent)" : "rgba(242,235,220,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: cert.accent ? "var(--bg)" : "rgba(242,235,220,0.5)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
            </svg>
          </div>
        </div>

        {/* divider */}
        <div style={{ height: 1, background: "rgba(242,235,220,0.06)" }} />

        {/* meta */}
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.18em", color: "rgba(242,235,220,0.35)", marginBottom: 4, textTransform: "uppercase" }}>{t("certs.issued")}</div>
            <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, color: "rgba(242,235,220,0.75)" }}>{cert.date}</div>
          </div>
          {cert.credId && (
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.18em", color: "rgba(242,235,220,0.35)", marginBottom: 4, textTransform: "uppercase" }}>{t("certs.id")}</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(242,235,220,0.55)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 240 }}>{cert.credId}</div>
            </div>
          )}
        </div>

        {/* tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {cert.tags.map((tag, j) => (
            <span key={j} style={{
              padding: "4px 10px", borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace", fontSize: 9.5, letterSpacing: "0.10em",
              background: "rgba(242,235,220,0.06)", color: "rgba(242,235,220,0.5)",
              border: "1px solid rgba(242,235,220,0.08)",
            }}>{tag}</span>
          ))}
        </div>

        {/* link */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "Kanit, sans-serif", fontWeight: 500, fontSize: 13,
            color: hover ? "var(--accent)" : "rgba(242,235,220,0.55)",
            textDecoration: "none",
            transition: "color 240ms ease",
            textTransform: "lowercase",
          }}
        >
          {t("certs.view")}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </FadeIn>
  );
}

Object.assign(window, { CertsSection });
