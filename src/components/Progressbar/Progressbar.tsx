const Progressbar = (props: any) => {
  const { bgcolor, completed, fillcolor } = props;

  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: bgcolor,
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: fillcolor,
    borderRadius: "inherit",
  };
  return (
    <div style={containerStyles}>
      <div className="progressorRun" style={fillerStyles}></div>
    </div>
  );
};

export default Progressbar;
