// Reusable primitives: FadeIn, Magnet, AnimatedText, ContactButton

const { useState, useEffect, useRef, useMemo } = React;

// FadeIn — IntersectionObserver-driven entrance
function FadeIn({ children, delay = 0, y = 24, className = "", as: Tag = "div", once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

// Magnet — pointer-attracted child element
function Magnet({ children, strength = 0.35, radius = 120, className = "", style = {} }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        setT({ x: dx * strength, y: dy * strength });
      } else {
        setT({ x: 0, y: 0 });
      }
    };
    const onLeave = () => setT({ x: 0, y: 0 });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength]);
  return (
    <span
      ref={ref}
      className={className}
      style={{
        ...style,
        display: "inline-flex",
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform 350ms cubic-bezier(.2,.7,.2,1)",
        willChange: "transform",
      }}
    >
      {children}
    </span>
  );
}

// AnimatedText — letter-by-letter reveal on visible
function AnimatedText({ children, className = "", stagger = 28, delay = 0, as: Tag = "span" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const text = String(children);
  const words = text.split(" ");
  let i = 0;
  return (
    <Tag ref={ref} className={className} aria-label={text} style={{ display: "inline-block" }}>
      {words.map((w, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {[...w].map((ch) => {
            const idx = i++;
            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(0.6em)",
                  transition: `opacity 500ms cubic-bezier(.2,.7,.2,1) ${delay + idx * stagger}ms, transform 600ms cubic-bezier(.2,.7,.2,1) ${delay + idx * stagger}ms`,
                  willChange: "opacity, transform",
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && <span style={{ display: "inline-block", width: "0.28em" }}>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}

// ContactButton — magnetic button with arrow + hover fill
function ContactButton({
  children,
  href,
  onClick,
  variant = "primary", // primary | ghost | dark
  icon = null,
  external = false,
  className = "",
  style = {},
}) {
  const Tag = href ? "a" : "button";
  const props = href ? { href, target: external ? "_blank" : undefined, rel: external ? "noopener noreferrer" : undefined } : { onClick, type: "button" };

  const base = {
    primary: {
      bg: "var(--accent)",
      color: "var(--bg)",
      border: "1px solid var(--accent)",
      hoverBg: "transparent",
      hoverColor: "var(--accent)",
    },
    ghost: {
      bg: "transparent",
      color: "var(--fg)",
      border: "1px solid rgba(242,235,220,0.18)",
      hoverBg: "var(--fg)",
      hoverColor: "var(--bg)",
    },
    dark: {
      bg: "var(--bg)",
      color: "var(--fg)",
      border: "1px solid #0C0C0C",
      hoverBg: "transparent",
      hoverColor: "var(--bg)",
    },
  }[variant];

  const [hover, setHover] = useState(false);
  return (
    <Magnet strength={0.25} radius={140}>
      <Tag
        {...props}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`cb ${className}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 22px 14px 24px",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 500,
          fontSize: 15,
          letterSpacing: "0.01em",
          textTransform: "lowercase",
          textDecoration: "none",
          borderRadius: 999,
          cursor: "pointer",
          background: hover ? base.hoverBg : base.bg,
          color: hover ? base.hoverColor : base.color,
          border: base.border,
          transition: "background 280ms ease, color 280ms ease, transform 200ms ease",
          ...style,
        }}
      >
        <span>{children}</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: hover ? (base.hoverColor === "var(--accent)" ? "var(--accent)" : base.hoverColor) : (base.color === "var(--bg)" ? "var(--bg)" : base.color),
            color: hover ? base.hoverBg === "transparent" ? "var(--bg)" : base.hoverBg : base.bg,
            transition: "all 280ms ease",
            transform: hover ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        >
          {icon || (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </Tag>
    </Magnet>
  );
}

// Tiny inline SVG icons (lucide-inspired, original)
const Icon = {
  WhatsApp: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 14.3c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1c-.3-.1-1.2-.4-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5s.2-.3.3-.5c.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3 2 3 4.8 4.2c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.3c1.4.7 2.9 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
  ),
  Mail: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  ),
  LinkedIn: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.67h2.67v8.67zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.84h-2.66v-4.22c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23v4.29H10v-8.67h2.56v1.18h.04c.36-.67 1.22-1.38 2.52-1.38 2.7 0 3.2 1.78 3.2 4.08v4.79z"/></svg>
  ),
  Behance: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 6c.83 0 1.55.17 2.16.5.6.34 1.07.81 1.4 1.42.32.61.48 1.32.48 2.13 0 .87-.2 1.6-.6 2.18-.18.27-.42.5-.7.7.5.24.91.57 1.22.99.43.59.65 1.31.65 2.18 0 .89-.18 1.66-.55 2.31-.36.65-.88 1.15-1.55 1.5-.66.34-1.45.51-2.36.51H3V6h6.5zm-3 4.5h2.7c.5 0 .9-.13 1.2-.4.3-.27.45-.65.45-1.13 0-.46-.15-.83-.45-1.1-.3-.27-.7-.4-1.2-.4H6.5v3.03zm0 6.5h3c.55 0 .98-.14 1.3-.43.32-.29.48-.7.48-1.22 0-.52-.16-.93-.48-1.22-.32-.29-.75-.43-1.3-.43h-3V17zM21 13.5c0 .28-.02.55-.05.8h-5.4c.05.55.27.99.65 1.32.38.33.85.49 1.4.49.5 0 .92-.1 1.27-.3.34-.2.58-.48.7-.85h1.42c-.18.86-.6 1.55-1.27 2.05-.66.5-1.5.75-2.5.75-.86 0-1.62-.18-2.27-.55-.65-.37-1.16-.9-1.52-1.58-.36-.68-.54-1.46-.54-2.34 0-.88.18-1.66.54-2.34.36-.68.86-1.21 1.52-1.58.65-.37 1.4-.55 2.27-.55.86 0 1.6.18 2.24.55.63.37 1.12.88 1.46 1.55.34.66.51 1.4.51 2.23 0 .14-.01.27-.03.4zM15 8.5h4.5V7H15v1.5zm.55 4h3.95c-.05-.5-.26-.9-.62-1.2-.36-.3-.81-.45-1.35-.45-.54 0-1 .15-1.36.45-.36.3-.57.7-.62 1.2z"/></svg>
  ),
  Code: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Wrench: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7a1 1 0 0 0 1.4 1.4l7-7a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/></svg>
  ),
  Terminal: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  ),
  Bug: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 13h-3M5 13h3M19 19l-3-2M5 19l3-2M12 2v4"/></svg>
  ),
  Arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Dot: () => (<span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"var(--accent)"}} />),
};

Object.assign(window, { FadeIn, Magnet, AnimatedText, ContactButton, Icon });
