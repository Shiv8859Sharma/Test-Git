import Button from "@restart/ui/esm/Button";

function LocalButton({children,type,className,onClick},props) {


return(
    <Button className={className} type={type} onClick={onClick}>
        {children}
    </Button>
)
}
export default LocalButton;
