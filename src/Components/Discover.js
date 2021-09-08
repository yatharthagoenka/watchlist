import React from 'react'
import { Link } from "react-router-dom";

import './Stylesheets/cards.css'
import './Stylesheets/discover.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestMovies } from "./actions";


class Discover extends React.Component{

    componentDidMount(){
        this.props.requestMovies();
    }

    movie = (x,i) => (
        <div key={x.id}>
        <a href={`https://www.themoviedb.org/movie/${x.id}`} style={{textDecoration: 'none'}}>
        <div className="movie_card">
        <div className="info_section">
            <div className="movie_header">
            <img className="locandina" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} />
            <h1>{x.title}</h1>
            <h4>{x.release_date}</h4><br />
            <div id="iconrow">
                <div><p className="type">Genre ID: {x.genre_ids[0]}</p></div>
                <div id="iconfav"><FavoriteIcon /></div>
            </div>
            </div>
            <div className="movie_desc">
            <textarea className="text">
                {x.overview}
            </textarea>
            </div>
            <div className="movie_social">
            
            </div>
        </div>
        <div className="blur_back" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${x.backdrop_path})`}}></div>
        </div>
        </a>
        </div>
    )

    render(){
        const { results = [] } = this.props.data;
        return (
            <>
            <h1 id="discoverhead">Trending</h1>
            <div className="listcontainer">
                {results.map(this.movie)}
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Discover);