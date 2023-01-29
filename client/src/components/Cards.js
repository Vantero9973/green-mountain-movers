import Button from "@mui/material/Button";

export default function Cards() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="cardContainer">
        <img
          src="https://i.imgur.com/CjqUbqW.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Local Moving
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Having the right team helping you in a local move is crucial.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
      <div className="cardContainer">
        <img
          src="https://i.imgur.com/nlE9BQE.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Long-Distance Moving
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Long-distance moves can be intimidating, but our team will help every
          step of the way.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
      <div className="cardContainer">
        <img
          src="https://i.imgur.com/ISSqsqz.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Furniture Assembly
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Our skilled team brings the tools required to assemble anything you
          may need.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
      <div className="cardContainer">
        <img
          src="https://i.imgur.com/LpzbW7Z.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Junk Hauling
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Having the right team helping you in a local move is crucial.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
      <div className="cardContainer">
        <img
          src="https://i.imgur.com/ewJ3sOH.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Jobsite Delivery
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Having the right team helping you in a local move is crucial.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
      <div className="cardContainer">
        <img
          src="https://img.icons8.com/ios/512/swingset.png"
          alt=""
          style={{ height: "75px", width: "75px" }}
        />
        <h2
          className="card-title"
          style={{
            color: "#1c1c1e",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Swingset Assembly
        </h2>
        <p style={{ color: "#2c2c2e" }}>
          Having the right team helping you in a local move is crucial.
        </p>
        <Button
          variant="outlined"
          style={{
            background: "#0e5933",
            color: "white",
            borderColor: "#1c1c1e",
            borderRadius: "10px",
            fontFamily: "'Futura Md BT', sans-serif",
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

//extra code

{
  /* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          No job is too big, or too small
        </h1>
        <p
          style={{
            maxWidth: "50vw",
            fontSize: "18px",
            textAlign: "center",
            color: "#4d4d4d",
          }}
        >
          Whether you have an entire household or a studio apartment to move we
          are here to help with a courteous, trustworthy and RELIABLE team.
        </p>
      </div> */
}
