import Button from "@mui/material/Button";
import Select from "react-select";

export default function ContactForm() {
  const options = [
    { label: "Full Service Moves (Movers & Truck)", value: 1 },
    { label: "Labor Only Moves (Movers Only)", value: 2 },
    { label: "Furniture Assembly", value: 3 },
    { label: "Junk Removal", value: 4 },
    { label: "Jobsite Delivery", value: 5 },
    { label: "Swingset Assembly", value: 6 },
  ];

  // function onClickButton(e) {
  //   e.preventDefault();
  // }

  return (
    <div
      style={{
        marginTop: "12vh",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        <div style={{ margin: "10px", marginBottom: "3vh" }}>
          <h1 style={{ color: "black", fontSize: "36px", fontWeight: "bold" }}>
            Quote Request Form
          </h1>
          <p style={{ color: "#4d4d4d" }}>Fields marked with * are required</p>
        </div>
        <div
          style={{
            margin: "10px",
            fontSize: "20px",
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
            style={{ margin: "10px", fontSize: "20px" }}
          />
          <input
            type="date"
            name="requested_date"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            style={{ margin: "10px", fontSize: "20px" }}
          />
        </div>
        <input
          type="text"
          name="moving_from"
          placeholder="Moving From *"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{
            margin: "10px",
            width: "auto",
            height: "5vh",
            fontSize: "20px",
          }}
        />
        <input
          type="text"
          name="moving_to"
          placeholder="Moving To *"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{
            margin: "10px",
            height: "5vh",
            width: "auto",
            fontSize: "20px",
          }}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Describe Your Project *"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          style={{
            margin: "10px",
            height: "15vh",
            width: "auto",
            fontSize: "20px",
          }}
        ></textarea>
        <div style={{ display: "flex", alignItems: "space-between" }}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name *"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            style={{ margin: "10px", fontSize: "20px" }}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name *"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            style={{ margin: "10px", fontSize: "20px" }}
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
              fontSize: "20px",
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            style={{ margin: "10px", fontSize: "20px" }}
          />
        </div>
        <div
          style={{
            margin: "10px",
            width: "75vw",
            display: "flex",
            justifyContent: "flex-start",
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
            }}
          >
            Submit Form
          </Button>
        </div>
      </form>
    </div>
  );
}
