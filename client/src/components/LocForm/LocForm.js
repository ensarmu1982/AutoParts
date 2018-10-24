import React from "react";

const LocForm = (props) =>(
    <form className="form">
        <input
            onChange={props.handleInputChange}
            value={props.value}
            name={props.name}
            type="number"
            className="form-control"
            placeholder={props.placeholder}
        />
        <button
            id = "LocButton"
            onClick={props.handleLocSubmit}
            className="btn btn-primary mt-3">
            ZIPCODE
      </button>
    </form>
);

export default LocForm;