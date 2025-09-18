import { Link } from "react-router";


const header = () => {
    return (<div className="top-nav">
        using a tag make reload the page but Link tag is not
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div> );
}
 
export default header;