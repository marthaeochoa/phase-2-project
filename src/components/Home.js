import React from "react";
import { Link } from "react-router-dom"

function Home () {
    return (
        <section className="homepage">
            <h1>What's Playing At The Moment?</h1>
                <p>Here you will find a playlist of some of my favorite songs at the moment. <br/>
                Feel free to add some of your own or even remove songs that you're not feeling by simply <br />
                pressing the button at the end of each song. 
                </p>
                <Link className="button" to="/playlist"> See Playlist </Link>
        </section>
    )
}

export default Home;