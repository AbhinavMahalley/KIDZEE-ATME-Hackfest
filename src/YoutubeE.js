import React from "react";
import PropTypes from "prop-types";


const YoutubeE = ({ embedId }) => {
    return ( 
        <div className="ytvideo">
        <iframe
          height="240"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
     );
}
 
export default YoutubeE;