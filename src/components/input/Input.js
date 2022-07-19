import React from "react";
function LocalInput(props) {
    const {type,placeholder,className,name,id}=props

return(
    <input type={type} placeholder={placeholder} className={className} id={id} name={name}/>
)
}
export default LocalInput;