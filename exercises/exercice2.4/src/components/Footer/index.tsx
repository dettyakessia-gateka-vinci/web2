interface FooterProps {
    image:string;
    children:React.ReactNode;
}
 const Footer =(props:FooterProps)=>{
    return(
        <div>
        <img src={props.image} />
        <div>{props.children}</div>
        </div>
    )
 }
export default Footer;