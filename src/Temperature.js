import React, { useState } from "react"

export default function Temperature(props) {
    let [units, setUnits]= useState("metric")
    if (units==="metric")
    return (
<h2> 
    {Math.round(props.celsius)}° C / F 
</h2>
    )
else
return (
"f")
}
