import { useNavigate} from "react-router-dom";
import { Film } from "../../types";

interface PageTitleProps{
    titles:Film[];
}

const PageTitle=({titles}:PageTitleProps)=>{
    const navigate=useNavigate();
   
    return(
        <>
            {titles.map((movie)=>
            <div>
            <a onClick={()=>navigate(`/movie/${movie.id}`)}>{movie.title}</a>
           
            </div>
            )}
            </>
    )
}
export default PageTitle;