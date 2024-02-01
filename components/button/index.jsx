const Button = (props) => {
    return (
      <>
        <button
          style={{
            backgroundColor: "#FBB017",
            width: 350,
            height: 50,
            borderRadius: 10,
          }}
          type="submit"
          className="btn btn-warning"
        >
          <a href={props.href}>{props.text}</a>
        </button>
      </>
    );
  };
  
  export default Button;
  