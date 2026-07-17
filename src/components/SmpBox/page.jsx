const SmpBox = ({ plan }) => {
  return (
    <div className="smp-box-wrapper text-center">
      <div className="smp-box">
        <div className="smp-header">
          <div className="smp-title">
            <span className="smp-title">{plan.id}</span>{" "}
            <span className="smp-title">{plan.title}</span>
          </div>
          <span className="smp-name-f">{plan.name.first}</span>
          <span className="smp-name-l">{plan.name.last}</span>
          <div className="smp-req">{plan.requestInfo}</div>

          <div className="d-flex gap-4">
            <button className="smp-cta">{plan.buttonText}</button>

            <div className="price-box">
              <div>
                <span className="dollar">{plan.price.currencySymbol}</span>{" "}
                <span className="smp-price">{plan.price.amount}</span>
                <span className="mo">{plan.price.period}</span>
              </div>
              <div className="pause">{plan.price.note}</div>
            </div>
          </div>
        </div>
        <ul className="text-start">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmpBox;
