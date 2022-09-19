const Default = (value: Number) => {
  return <div>{value.toString()}</div>;
};

const OverN = (value: Number) => {
  return <b>{value.toString()}</b>;
};

const Bad = () => {
  return <div>NOPE</div>;
};

export { OverN, Default, Bad };
