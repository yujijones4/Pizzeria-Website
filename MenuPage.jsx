(() => {
  const { ScriptLabel, Headline, Tabs, Tag, MenuCard, TextLink } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;

  function MenuPage({ onPick }) {
    const [cat, setCat] = React.useState("pizza");
    const [f, setF] = React.useState({ veg: false, spicy: false });
    const toggle = (k) => setF((s) => ({ ...s, [k]: !s[k] }));
    const shown = D.items.filter((i) => i.cat === cat && (!f.veg || i.tags.includes("veg") || i.tags.includes("vegan")) && (!f.spicy || i.tags.includes("spicy")));
    const rows = cat !== "pizza";
    return (
      <main className="kit-main">
        <div className="menu">
          <div className="menu__head">
            <div>
              <ScriptLabel>Fresh out the oven</ScriptLabel>
              <Headline level="display">The menu</Headline>
            </div>
            <p className="pz-small menu__note">Pizzas are 14in in diameter, unless you say otherwise!</p>
          </div>
          <div className="menu__bar">
            <Tabs value={cat} onChange={setCat} items={D.categories.map((c) => ({ ...c, count: D.items.filter((i) => i.cat === c.id).length }))} />
            <div className="menu__filters">
              <Tag icon="leaf" onClick={() => toggle("veg")} selected={f.veg}>Veg</Tag>
              <Tag icon="flame" onClick={() => toggle("spicy")} selected={f.spicy}>Spicy</Tag>
            </div>
          </div>
          {shown.length ? (
            <div className={"menu__grid" + (rows ? " menu__grid--rows" : "")}>
              {shown.map((it) => (
                <MenuCard key={it.id} layout={rows ? "row" : "stack"} name={it.name} price={it.price} badge={it.badge} description={it.desc} tags={it.tags.map((t) => D.tags[t])}
                  image={rows ? undefined : it.img} alt={it.name} media={rows && it.img ? <img src={it.img} alt={it.name} className={"kit-side-photo" + (it.cut ? " kit-side-cut" : "")} /> : it.img ? undefined : <image-slot id={"cut-" + it.id} shape={rows ? "rect" : "circle"} placeholder={it.name}></image-slot>}
                  onClick={() => onPick(it)} onAdd={() => onPick(it)} />
              ))}
            </div>
          ) : (
            <div className="menu__empty">
              <ScriptLabel>Nothing matches that combo.</ScriptLabel>
              <TextLink size="md" onClick={() => setF({ veg: false, spicy: false })}>Clear filters</TextLink>
            </div>
          )}
        </div>
      </main>
    );
  }

  Object.assign(window, { MenuPage });
})();
