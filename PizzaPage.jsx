(() => {
  const { Headline, ScriptLabel, Button, StatPanel, VideoCard, SizeLineup, TextLink } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  function PizzaPage({ onOrder, onMenu, onPlay, onPick }) {
    const storyRef = React.useRef(null);
    const cutRef = React.useRef(null);
    const [size, setSize] = React.useState("14");
    const [vw, setVw] = React.useState(window.innerWidth);
    React.useEffect(() => {
      let raf = 0;
      const update = () => {
        raf = 0;
        const el = storyRef.current, cut = cutRef.current;
        if (!el || !cut) return;
        const r = el.getBoundingClientRect();
        const h = cut.offsetHeight;
        const y = Math.min(r.height - h, Math.max(0, -r.top + (window.innerHeight - h) / 2));
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
        cut.style.transform = "translate3d(0," + y.toFixed(1) + "px,0) rotate(" + (-18 + p * 200).toFixed(2) + "deg)";
      };
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
      const onResize = () => { setVw(window.innerWidth); onScroll(); };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); };
    }, []);
    const base = D.items[0];
    const k = Math.min(1, Math.max(0.5, (vw - 280) / 1160));
    const sel = D.lineup.find((s) => s.id === size);
    const selPrice = sel.price != null ? sel.price : base.price + D.sizes.find((s) => s.id === size).delta;

    return (
      <main className="kit-main">
        <HeroMarquee onPick={onPick} onMenu={onMenu} />
        <div className="story" ref={storyRef}>
          <div className="story__layer">
            <div className="story__cutout" ref={cutRef}>
              <img src={base.img} alt="Margherita" />
            </div>
          </div>
          <section className="intro">
            <div className="intro__copy">
              <ScriptLabel>House classic</ScriptLabel>
              <Headline level="display" className="kit-display-sm">Classic<br />Margherita</Headline>
              <p className="pz-small">Our first pie and still the one we judge ourselves by. Hand-crushed San Marzano tomatoes, torn fior di latte, a fistful of basil and a slick of good olive oil — then ninety seconds in a 900° dome until the edge blisters and the middle stays soft. Simple on paper, stubborn in practice. Fold it, don’t fight it.</p>
              <Button variant="ink" onClick={() => onOrder("14")}>Order now</Button>
            </div>
            <div aria-hidden="true"></div>
            <StatPanel stats={D.stats} />
          </section>
          <section className="taste">
            <Headline level="mega" as="h2" className="taste__word">Blistered</Headline>
            <div className="taste__grid">
              <div aria-hidden="true"></div>
              <div aria-hidden="true"></div>
              <div className="taste__copy">
                <p className="pz-small">A charred, chewy, gently tangy crust with bright tomato, milky mozzarella and a peppery hit of basil. It’s the pie we eat on our day off, which tells you everything.</p>
                <Headline level="h4">The bake</Headline>
                <p className="pz-small">Neapolitan at heart, but we don’t sweat the rulebook. High-hydration dough, cold-fermented for three days, stretched by hand to order and baked right on the oven floor until it’s spotted like a leopard. Eat it quick, while it’s still talking back.</p>
              </div>
            </div>
          </section>
        </div>
        <section className="sizes">
          <ScriptLabel>Hungry level:</ScriptLabel>
          <Headline level="display" align="center">Pick your size</Headline>
          <SizeLineup value={size} onChange={setSize} items={D.lineup.map((s, i) => ({ ...s, labelSize: [17, 20, 25][i], width: Math.round(s.width * k), height: s.height ? Math.round(s.height * k) : undefined, media: s.shape === "rect" ? <image-slot id={"size-" + s.id} shape="rect" placeholder={s.label}></image-slot> : (i === 2 ? <span style={{ position: "relative", display: "block", width: "100%", height: "100%" }}><img src={base.img} alt={s.label + " Margherita"} className="pz-cutout" style={{ objectFit: "contain" }} /><svg viewBox="0 0 100 100" aria-hidden="true" style={{ position: "absolute", left: "-12%", top: "-12%", width: "124%", height: "124%", overflow: "visible", pointerEvents: "none" }}><defs><path id="crust-arc" d="M 8,50 A 42,42 0 0 1 92,50" fill="none" /></defs><text style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: 2.5, fill: "var(--text-brand)", textTransform: "uppercase" }}><textPath href="#crust-arc" startOffset="50%" textAnchor="middle">Margherita</textPath></text></svg></span> : <img src={base.img} alt={s.label + " Margherita"} className="pz-cutout" style={{ objectFit: "contain" }} />) }))} />
          <div className="sizes__cta"><TextLink size="md" arrow onClick={() => onOrder(size)}>{"Order " + sel.cta + " — " + fmt(selPrice)}</TextLink></div>
        </section>
        <section className="pairings">
          <div className="pairings__photo pairings__duo"><img src="../../assets/photos/pairing-loaded-fries.png" alt="Loaded fries with cheese sauce and bacon" /></div>
          <div className="pairings__copy">
            <ScriptLabel>Pairings</ScriptLabel>
            <Headline level="display" className="kit-display-sm">Don’t forget<br />the fries</Headline>
            <p className="pz-small" style={{fontSize:15}}>Cheesy garlic bread for the table, a basket of fries (or the loaded ones), and an ice-cold Olipop to wash it down.</p>
            <Button variant="ink" iconRight="arrow-right" onClick={onMenu}>See the full menu</Button>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about__panel">
            <ScriptLabel>About {D.brand.name}</ScriptLabel>
            <Headline level="display" className="kit-display-sm">Pull up<br />a chair</Headline>
            <p className="pz-body">{D.brand.name} is a neighborhood pizzeria with one big oven and a short list of rules: real fire, slow dough, good tomatoes, and nothing on the menu we wouldn’t eat on our day off.</p>
            <p className="pz-body">Grab a slice at the counter, stay for a whole pie by the window, or take one home still talking back. Either way, the oven’s on and there’s a seat with your name on it.</p>
            <Button variant="ink" iconRight="arrow-right" onClick={onMenu}>See the menu</Button>
          </div>
        </section>
      </main>
    );
  }

  Object.assign(window, { PizzaPage });
})();
