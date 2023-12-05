const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  const className_container = `box ${className}`;
  return <div className={className_container}>{name}</div>;
};

const element = (
  //  Write your code here.
  <div className="card-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small-box" name="Small" />
      <Box className="medium-box" name="Medium" />
      <Box className="large-box" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
