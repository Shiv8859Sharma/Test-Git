import React from "react";

function LocalP({children,className,id},props) {

return(
    <p className={className} id={id}>
    {children}

    </p>
)
}
export default LocalP;