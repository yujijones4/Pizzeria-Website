(() => {
  const { Dialog, Radio, Select, Checkbox, Switch, QuantityStepper, Button, Tag } = window.PizzaWebsiteDesignSystem_ca709c;
  const D = window.PZ_DATA;
  const fmt = window.PZ_FMT;

  function CustomizeDialog({ item, onClose, onAdd }) {
    const [size, setSize] = React.useState(D.sizes.some((s) => s.id === item.presetSize) ? item.presetSize : "14");
    const [crust, setCrust] = React.useState("classic");
    const [tops, setTops] = React.useState({});
    const [well, setWell] = React.useState(false);
    const [qty, setQty] = React.useState(1);
    const sz = D.sizes.find((s) => s.id === size);
    const cr = D.crusts.find((c) => c.id === crust);
    const extras = D.toppings.filter((t) => tops[t.id]);
    const unit = item.price + sz.delta + cr.price + extras.reduce((n, t) => n + t.price, 0);
    const summary = [sz.label, cr.label, ...extras.map((e) => e.label), well && "Well done"].filter(Boolean).join(" · ");
    return (
      <Dialog size="lg" eyebrow="Make it yours" title={item.name} onClose={onClose}
        footer={<div className="cz__foot"><QuantityStepper value={qty} onChange={setQty} /><Button size="lg" onClick={() => onAdd({ id: item.id, name: item.name, unit, qty, summary })}>{"Add to order — " + fmt(unit * qty)}</Button></div>}>
        <div className="cz">
          <div className="cz__media">
            <div className="cz__cut">{item.img ? <img src={item.img} alt={item.name} /> : <image-slot id={"dlg-" + item.id} shape="circle" placeholder={item.name + " cutout"}></image-slot>}</div>
            <p className="pz-small">{item.desc}</p>
            {item.tags.length > 0 && <div className="cz__tags">{item.tags.map((t) => <Tag key={t} size="sm" tone={D.tags[t].tone} icon={D.tags[t].icon}>{D.tags[t].label}</Tag>)}</div>}
          </div>
          <div className="cz__form">
            <div className="cz__group">
              <span className="pz-field__label">Size</span>
              <div className="cz__sizes">
                {D.sizes.map((s) => <Radio key={s.id} variant="tile" name="cz-size" label={s.label} description={s.serves} meta={fmt(item.price + s.delta)} checked={size === s.id} onChange={() => setSize(s.id)} />)}
              </div>
            </div>
            <Select label="Crust" value={crust} onChange={(e) => setCrust(e.target.value)} options={D.crusts.map((c) => ({ value: c.id, label: c.label + (c.price ? " (+$" + c.price + ")" : "") }))} />
            <div className="cz__group">
              <span className="pz-field__label">Extras</span>
              <div className="cz__extras">
                {D.toppings.map((t) => <Checkbox key={t.id} label={t.label} meta={t.price ? "+$" + t.price : "Free"} checked={!!tops[t.id]} onChange={(e) => setTops({ ...tops, [t.id]: e.target.checked })} />)}
              </div>
            </div>
            <Switch label="Well done" description="Extra char on the crust." checked={well} onChange={(e) => setWell(e.target.checked)} />
          </div>
        </div>
      </Dialog>
    );
  }

  Object.assign(window, { CustomizeDialog });
})();
