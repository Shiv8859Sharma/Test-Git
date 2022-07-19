import React from "react";
function LocalTextarea(props) {
    const {onChange,placeholder,className,name,id}=props

return(
    // <input type={type} placeholder={placeholder} className={className} id={id} name={name}/>
    <textarea className={className} placeholder={placeholder} name={name} id={id} onChange={onChange}></textarea>
)
}
export default LocalTextarea;