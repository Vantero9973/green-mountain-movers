import logo from "../media/logo.png";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <div
      className="navbar bg-base-100"
      style={{
        borderBottom: "1px solid #2c2c2e",
        background: "white",
        height: "12vh",
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: "100",
        color: "black",
      }}
    >
      <div
        className="flex-1"
        style={{ margin: "1vh", display: "flex", alignItems: "flex-end" }}
      >
        <a href="/" style={{ display: "flex" }}>
          <img
            src="https://i.imgur.com/RVXG4nv.png"
            alt="Logo"
            style={{ maxHeight: "75px", maxWidth: "200px", objectFit: "cover" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="green-mountain-movers">Green Mountain Movers</h1>
            <p className="for-when-you-need">
              For when you need a mountain moved
            </p>
          </div>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="navList">
            <a
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              Services
            </a>
          </li>
          <li className="navList">
            <a
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              About Us
            </a>
          </li>
          <li className="navList">
            <a
              href="/contact"
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              Contact
            </a>
          </li>
          {/* <li>
            <Button
              variant="outlined"
              style={{
                width: "fit-content",
                fontSize: "16px",
                fontWeight: "bold",
                background: "#5A8753",
                borderColor: "#1c1c1e",
                color: "#1c1c1e",
                borderRadius: "10px",
              }}
            >
              Call/Text (719) 680-1538
            </Button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
