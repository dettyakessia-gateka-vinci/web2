interface HeaderProps {
    image: string;
    children: React.ReactNode;
}
const Header = (props: HeaderProps) => {
    return (
         
        <div >
            <img src={props.image}  />

            <div>{props.children}</div>
        </div>
    )
}
export default Header;