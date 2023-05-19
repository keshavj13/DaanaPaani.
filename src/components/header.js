const HeadingComponet =() =>{
    return(
        <div className="header">
        {title}
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

            </div>
        </div>
    )

}
const title =(
    <a href="/">
    <img className="mainLogo" 
    src="https://daanapaanifresno.com/wp-content/uploads/2020/05/IMG_0817-1024x720.png" 
    alt="DaanaPaani" />
    </a>
)

 
export default HeadingComponet;