var phantom = {
  display: "block",
  padding: "20px",
  height: "0px",
  width: "100%",
};
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%",
};

function FooterNav() {

  return (
    <>
      <div style={phantom} />
      <h6 style={ style }>a footer I hope....</h6>
    </>
  );
}

export default FooterNav
