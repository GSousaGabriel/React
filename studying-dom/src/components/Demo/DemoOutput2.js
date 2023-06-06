import React from "react";

const DemoOutput2 = props => {
    alert("entered")

    return <p>{props.show ? "Second paragraph" : ""}</p>
}

export default React.memo(DemoOutput2)