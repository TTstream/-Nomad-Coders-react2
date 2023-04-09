import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieList({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="해당 이미지 없음" />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieList;
