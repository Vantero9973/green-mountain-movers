import Cards from "./Cards";
import Button from "@mui/material/Button";
import truck from "../media/truck_two.jpeg";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Landing() {
  const options = [
    { label: "Full Service Moves (Movers & Truck)", value: 1 },
    { label: "Labor Only Moves (Movers Only)", value: 2 },
    { label: "Furniture Assembly", value: 3 },
    { label: "Junk Removal", value: 4 },
    { label: "Jobsite Delivery", value: 5 },
    { label: "Swingset Assembly", value: 6 },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          marginTop: "12vh",
          minHeight: "88vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://www.earlsmovingcompany.com/wp-content/uploads/2017/11/Moving-4-1920x1080.png"
              alt="Landing Page Image"
              style={{
                height: "55vh",
                width: "100vw",
                // borderTopRightRadius: "25px",
                // borderBottomRightRadius: "25px",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "58vh",
              position: "absolute",
              background: "rgba(0,0,0,0.75)",
              borderRadius: "10px",
            }}
          >
            <form
              style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <div
                style={{
                  margin: "10px",
                  fontSize: "16px",
                  width: "auto",
                  color: "#1c1c1e",
                }}
              >
                <Select
                  placeholder="Select Service(s) *"
                  options={options}
                  isMulti={true}
                  closeMenuOnSelect={false}
                />
              </div>
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  name="flights_stairs"
                  placeholder="Flights of Stairs *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px", fontSize: "16px" }}
                />
                <input
                  type="date"
                  name="requested_date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px", fontSize: "16px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  name="moving_from"
                  placeholder="Moving From *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{
                    margin: "10px",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="text"
                  name="moving_to"
                  placeholder="Moving To *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{
                    margin: "10px",
                    fontSize: "16px",
                  }}
                />
              </div>
              <textarea
                type="text"
                name="description"
                placeholder="Describe Your Project *"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                style={{
                  margin: "10px",
                  height: "10vh",
                  width: "auto",
                  fontSize: "16px",
                }}
              ></textarea>
              <div style={{ display: "flex", alignItems: "space-between" }}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px", fontSize: "16px" }}
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px", fontSize: "16px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{
                    margin: "10px",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  style={{ margin: "10px", fontSize: "16px" }}
                />
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  type="submit"
                  style={{
                    fontSize: "18px",
                    background: "#0e5933",
                    color: "white",
                    borderColor: "#5A8753",
                    // fontWeight: "bold",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "5vh",
          gap: "25px",
        }}
      >
        <div style={{ lineHeight: "350%" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            A Seamless
          </h1>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Moving Experience
          </h1>
        </div>
        <p style={{ maxWidth: "60vw", fontSize: "17px", color: "#4d4d4d" }}>
          Green Mountain Movers is locally owned and operated. We're here to
          help make your move as stress-free as possible and take great pride in
          serving our customers with a genuine commitment to excellence.
        </p>
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "black" }}>
          *Fully Licensed, Bonded, and Insured*
        </p>
      </div>
      <Cards />
    </>
  );
}

//EXTRA SECTION

//data-aos="fade-right" data-aos-duration="1000"
