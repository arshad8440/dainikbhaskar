import React from 'react'

const Newsitem = (props) =>{

    let {title, discruption, urlImage, publishedAt, newsurl, author, content , source} = props;
    return (
      <div className="card mb-3" style={{width: "100%"}}>
        <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{zIndex: "1"}}>{source? source : "Unknown"}</span>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={urlImage ? urlImage : "https://www.drugtargetreview.com/wp-content/uploads/CRISPR-gene-drive.jpg"} className="card-img-top" alt="newsimage" style={{}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discruption}</p>
              <p className="card-text">{content}</p>
              <p className="card-text"><small className="text-muted"><b>author </b>{author? author : "Unknown"} <b> published at </b> {new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsurl} className="btn btn-sm btn-dark" target='_blank' rel='noreferrer'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Newsitem
