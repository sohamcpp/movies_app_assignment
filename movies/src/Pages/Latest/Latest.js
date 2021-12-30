import axios from "axios";
import "./Latest.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Latest = () =>{

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );

        setNumOfPages(data.total_pages);
        setContent(data.results);
      };

      useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
      }, [page]);

    return (
        <div>
            <span className="pageTitle">Latest</span>
            
            <div className="trending">
                {content &&
                content.map((c) => (
                    <SingleContent 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title}
                    date={c.first_air_date }
                    media_type="movie"
                    vote_average={c.vote_average}
                    />
                ))}
            </div>
            {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
        </div>
    );
};

export default Latest;
