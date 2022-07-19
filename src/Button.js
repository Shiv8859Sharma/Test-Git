import Button from "@restart/ui/esm/Button";

function ClickButton(props){

    const { label, onClick, type } = props;
    

    return <Button className="btn btn-dark"  onClick={onClick}>{label}</Button>
}
export default ClickButton;
// props=this.btn()