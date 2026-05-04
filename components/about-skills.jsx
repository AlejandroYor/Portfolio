// About + Skills sections

function AboutSection() {
  const { t } = useT();
  return (
    <section id="about" style={{ position: "relative", padding: "140px 32px 120px", background: "#0C0C0C" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 360px) minmax(0, 1fr)", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 18 }}>
                {t("about.tag")}
              </div>
              <h2 style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 0.95,
                letterSpacing: "-0.03em", margin: 0, color: "#F5F5F2", textTransform: "lowercase",
              }}>
                {t("about.title")}<span style={{ fontStyle: "italic", fontWeight: 200, color: "rgba(245,245,242,0.5)" }}>{t("about.titleItalic")}</span>
              </h2>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={100}>
              <p style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.4,
                color: "#F5F5F2", margin: 0, textWrap: "pretty",
              }}>
                {t("about.p1a")}<span style={{ color: "var(--accent)" }}>{t("about.p1b")}</span>{t("about.p1c")}
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p style={{
                marginTop: 28,
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: 18, lineHeight: 1.65,
                color: "rgba(245,245,242,0.65)",
              }}>
                {t("about.p2")}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p style={{
                marginTop: 20,
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: 18, lineHeight: 1.65,
                color: "rgba(245,245,242,0.65)",
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
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "120px minmax(0,1fr) auto",
                    gap: 24, padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    alignItems: "baseline",
                  }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(245,245,242,0.4)", letterSpacing: "0.1em" }}>{e.date}</span>
                    <div>
                      <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 500, fontSize: 18, color: "#F5F5F2" }}>{e.role}</div>
                      <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 13.5, color: "rgba(245,245,242,0.55)", marginTop: 4 }}>{e.note}</div>
                    </div>
                    <span style={{ fontFamily: "Kanit, sans-serif", fontSize: 14, color: "var(--accent)" }}>{e.company}</span>
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
  { labelKey: "skills.cat2", code: "02", icon: "Code",
    itemKeys: ["skills.cat2.i1","skills.cat2.i2","skills.cat2.i3","skills.cat2.i4"],
    tags: ["Frontend", "UI", "Responsive"] },
  { labelKey: "skills.cat3", code: "03", icon: "Terminal",
    itemKeys: ["skills.cat3.i1","skills.cat3.i2","skills.cat3.i3","skills.cat3.i4"],
    tags: ["GraphQL", "SQL", "JSON"] },
];

function SkillCard({ data, i }) {
  const { t } = useT();
  const [hover, setHover] = React.useState(false);
  const I = Icon[data.icon];
  return (
    <FadeIn delay={i * 120}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          padding: "32px 28px 28px",
          background: hover ? "#0C0C0C" : "#FAFAF7",
          color: hover ? "#F5F5F2" : "#0C0C0C",
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
            background: hover ? "var(--accent)" : "#0C0C0C",
            color: hover ? "#0C0C0C" : "#F5F5F2",
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
              color: hover ? "rgba(245,245,242,0.85)" : "rgba(12,12,12,0.78)",
              transition: "color 300ms ease",
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: hover ? "var(--accent)" : "#0C0C0C",
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
              color: hover ? "rgba(245,245,242,0.7)" : "rgba(12,12,12,0.6)",
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
            background: "#FAFAF7", border: "1px solid #E8E6DF",
            fontFamily: "Kanit, sans-serif", fontSize: 14, fontWeight: 400, color: "#0C0C0C",
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
    <section id="skills" style={{ position: "relative", padding: "140px 32px 140px", background: "#F5F2EA", color: "#0C0C0C" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* header */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 40, alignItems: "end", marginBottom: 64 }}>
          <FadeIn>
            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.22em", color: "rgba(12,12,12,0.55)", marginBottom: 18 }}>
                {t("skills.tag")}
              </div>
              <h2 style={{
                fontFamily: "Kanit, sans-serif", fontWeight: 300,
                fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.92,
                letterSpacing: "-0.04em", margin: 0, color: "#0C0C0C", textTransform: "lowercase",
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
          {SKILL_DATA.map((d, i) => (<SkillCard key={d.code} data={d} i={i} />))}
        </div>

        {/* ticker */}
        <FadeIn delay={400}>
          <div style={{ marginTop: 60 }}>
            <SkillsTickerRow items={[
              "REST", "GraphQL", "OAuth", "SAML", "SCIM", "JSON", "Webhooks", "SQL",
              "Slack API", "Jira", "Zapier", "Azure", "Postman", "DevTools", "Git",
            ]} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection, SkillsSection });
