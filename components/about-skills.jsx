// About + Skills sections

function AboutSection() {
  const { t } = useT();
  const companyLinks = [
    'https://monday.com/',
    'https://weareeverise.com/',
    'https://www.delonghi.com/it-it',
    'https://grupoeconsa.com/'
  ];
  const gradients = [
    "linear-gradient(135deg, rgba(255, 0, 127, 0.1), rgba(124, 58, 237, 0.1))", // monday pink-purple
    "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))", // everise blue-teal
    "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1))", // atento red-orange
    "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))"  // grupo econsa green
  ];
  const hoverGradients = [
    "linear-gradient(135deg, rgba(255, 0, 127, 0.2), rgba(124, 58, 237, 0.2))",
    "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
    "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(251, 146, 60, 0.2))",
    "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))"
  ];
  return (
    <section id="about" style={{ position: "relative", padding: "140px 32px 120px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 360px) minmax(0, 1fr)", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div className="about-sticky" style={{ position: "sticky", top: 100 }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 18 }}>
                {t("about.tag")}
              </div>
              <h2 style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 0.95,
                letterSpacing: "-0.03em", margin: 0, color: "var(--fg)", textTransform: "lowercase",
              }}>
                {t("about.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(242,235,220,0.5)" }}>{t("about.titleItalic")}</span>
              </h2>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={100}>
              <p style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.4,
                color: "var(--fg)", margin: 0, textWrap: "pretty",
              }}>
                {t("about.p1a")}<span style={{ color: "var(--accent)" }}>{t("about.p1b")}</span>{t("about.p1c")}
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p style={{
                marginTop: 28,
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: 18, lineHeight: 1.65,
                color: "rgba(242,235,220,0.65)",
              }}>
                {t("about.p2")}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p style={{
                marginTop: 20,
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: 18, lineHeight: 1.65,
                color: "rgba(242,235,220,0.65)",
              }}>
                {t("about.p3")}
              </p>
            </FadeIn>

            {/* experience timeline */}
            <FadeIn delay={400}>
              <div style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { role: t("exp.role1"), company: "monday.com", date: t("exp.date1"), note: t("exp.note1") },
                  { role: t("exp.role2"), company: "Everise", date: t("exp.date2"), note: t("exp.note2") },
                  { role: t("exp.role3"), company: "Atento", date: t("exp.date3"), note: t("exp.note3") },
                  { role: t("exp.role4"), company: "Grupo Econsa", date: t("exp.date4"), note: t("exp.note4") },
                ].map((e, i) => (
                  <div key={i} className="about-experience-row" style={{
                    display: "grid", gridTemplateColumns: "120px minmax(0,1fr) auto",
                    gap: 24, padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    alignItems: "baseline",
                    ...(i < 4 ? {
                      background: gradients[i],
                      borderRadius: "8px",
                      padding: "22px 16px",
                      margin: "8px 0",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    } : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (i < 4) {
                      e.currentTarget.style.background = hoverGradients[i];
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 4px 12px ${gradients[i].replace('0.1', '0.3').replace('0.2', '0.3')}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i < 4) {
                      e.currentTarget.style.background = gradients[i];
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                  onClick={() => {
                    if (i < 4) window.open(companyLinks[i], '_blank');
                  }}
                  >
                    <span className="exp-date" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(242,235,220,0.4)", letterSpacing: "0.1em" }}>{e.date}</span>
                    <div className="exp-body">
                      <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 500, fontSize: 18, color: "var(--fg)" }}>{e.role}</div>
                      <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 13.5, color: "rgba(242,235,220,0.55)", marginTop: 4 }}>{e.note}</div>
                    </div>
                    <span className="exp-company" style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, color: "var(--accent)" }}>{e.company}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_DATA = [
  { labelKey: "skills.cat1", code: "01", icon: "Wrench",
    itemKeys: ["skills.cat1.i1","skills.cat1.i2","skills.cat1.i3","skills.cat1.i4"],
    tags: ["B2B", "Enterprise", "SLA"] },
  { labelKey: "skills.cat2", code: "02", icon: "Bug",
    itemKeys: ["skills.cat2.i1","skills.cat2.i2","skills.cat2.i3","skills.cat2.i4"],
    tags: ["MySQL", "PostgreSQL", "Oracle"] },
  { labelKey: "skills.cat3", code: "03", icon: "Code",
    itemKeys: ["skills.cat3.i1","skills.cat3.i2","skills.cat3.i3","skills.cat3.i4"],
    tags: ["Python", "Java", "React"] },
];

function SkillCard({ data, i }) {
  const { t } = useT();
  const [hover, setHover] = React.useState(false);
  const I = Icon[data.icon];
  return (
    <FadeIn delay={i * 120}>
      <div
        className="skill-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          padding: "32px 28px 28px",
          background: hover ? "var(--bg)" : "var(--cream-2)",
          color: hover ? "var(--fg)" : "var(--bg)",
          borderRadius: 24,
          border: "1px solid #E8E6DF",
          transition: "background 380ms ease, color 380ms ease, transform 380ms ease",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          minHeight: 380,
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top: code + icon */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.2em",
            color: hover ? "var(--accent)" : "rgba(12,12,12,0.45)",
            transition: "color 300ms ease",
          }}>/ {data.code}</span>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 44, height: 44, borderRadius: 14,
            background: hover ? "var(--accent)" : "var(--bg)",
            color: hover ? "var(--bg)" : "var(--fg)",
            transition: "background 300ms ease, color 300ms ease, transform 300ms ease",
            transform: hover ? "rotate(-8deg)" : "rotate(0)",
          }}>
            <I size={20} />
          </span>
        </div>

        <h3 style={{
          marginTop: 36,
          fontFamily: "Kanit, sans-serif", fontWeight: 400,
          fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.02em",
          textTransform: "lowercase",
          color: "inherit",
        }}>
          {t(data.labelKey).toLowerCase()}
        </h3>

        <ul style={{
          marginTop: 24, padding: 0, listStyle: "none",
          display: "flex", flexDirection: "column", gap: 10,
          flexGrow: 1,
        }}>
          {data.itemKeys.map((ik, idx) => { const it = t(ik); return (
            <li key={idx} style={{
              display: "flex", alignItems: "center", gap: 12,
              fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15.5,
              color: hover ? "rgba(242,235,220,0.85)" : "rgba(12,12,12,0.78)",
              transition: "color 300ms ease",
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: hover ? "var(--accent)" : "var(--bg)",
                transition: "background 300ms ease",
                flexShrink: 0,
              }} />
              {it}
            </li>
          ); })}
        </ul>

        <div style={{
          marginTop: 24, paddingTop: 20,
          borderTop: `1px solid ${hover ? "rgba(255,255,255,0.10)" : "rgba(12,12,12,0.10)"}`,
          display: "flex", flexWrap: "wrap", gap: 6,
          transition: "border-color 300ms ease",
        }}>
          {data.tags.map((t) => (
            <span key={t} style={{
              padding: "5px 10px", borderRadius: 999,
              fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.1em",
              background: hover ? "rgba(255,255,255,0.06)" : "rgba(12,12,12,0.05)",
              color: hover ? "rgba(242,235,220,0.7)" : "rgba(12,12,12,0.6)",
              transition: "all 300ms ease",
            }}>{t.toLowerCase()}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function SkillsTickerRow({ items, reverse = false }) {
  return (
    <div style={{
      overflow: "hidden", padding: "10px 0",
      maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
    }}>
      <div style={{
        display: "inline-flex", gap: 12, whiteSpace: "nowrap",
        animation: `${reverse ? "tickerR" : "tickerL"} 40s linear infinite`,
      }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 18px", borderRadius: 999,
            background: "var(--cream-2)", border: "1px solid #E8E6DF",
            fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 400, color: "var(--bg)",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const { t } = useT();
  return (
    <section id="skills" style={{ position: "relative", padding: "140px 32px 140px", background: "var(--cream)", color: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* header */}
        <div className="skills-header" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 40, alignItems: "end", marginBottom: 64 }}>
          <FadeIn>
            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "rgba(12,12,12,0.55)", marginBottom: 18 }}>
                {t("skills.tag")}
              </div>
              <h2 style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.92,
                letterSpacing: "-0.04em", margin: 0, color: "var(--bg)", textTransform: "lowercase",
              }}>
                {t("skills.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(12,12,12,0.45)" }}>{t("skills.titleItalic")}</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p style={{
              maxWidth: 320, margin: 0, fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15.5, lineHeight: 1.55,
              color: "rgba(12,12,12,0.65)", textWrap: "pretty",
            }}>
              {t("skills.intro")}
            </p>
          </FadeIn>
        </div>

        {/* cards */}
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
          {SKILL_DATA.map((d, i) => (<SkillCard key={d.code} data={d} i={i} />))}
        </div>

        {/* ticker */}
        <FadeIn delay={400}>
          <div style={{ marginTop: 60 }}>
            <SkillsTickerRow items={[
              "MySQL", "PostgreSQL", "Oracle", "SQL Server", "GraphQL", "Python", "Java", "C#",
              "TypeScript", "Node.js", "React", "REST", "OAuth", "SAML", "ETL", "Tailwind", "Git", "Postman", "Azure",
            ]} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection, SkillsSection });
