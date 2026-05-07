
const Header = ({title, bg})=>{
    
    return (
        <div className="flex justify-between items-center gap-10 p-5 bg-blue-100">
            <h1>{title}</h1>
            <ul className="flex gap-4">
                <li><a href="#" >Home</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Contact</a></li>
            </ul>
        </div>
    )
}

export default Header