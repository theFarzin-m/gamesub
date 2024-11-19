export const formatCurrency = (value) =>
  new Intl.NumberFormat("fa", { style: "currency", currency: "IRR" }).format(
    value
  );
