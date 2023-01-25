import React from 'react'

const Newsitem = (props) =>{

    let {title, discruption, urlImage, publishedAt, newsurl, author, content , source} = props;
    return (
      <div className="card mb-3" style={{width: "100%", border: `1px solid #c9c9c9`, background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
        <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{zIndex: "1"}}>{source? source : "Unknown"}</span>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={urlImage ? urlImage : "https://www.drugtargetreview.com/wp-content/uploads/CRISPR-gene-drive.jpg"} className="card-img-top" alt="newsimage" style={{}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discruption ? discruption : "..."}</p>
              <p className="card-text">{content ? content : "..."}</p>
              <p className="card-text"><small className="text-muted"><b>author </b>{author? author : "Unknown"} <b> published at </b> {new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsurl ? newsurl : ""} className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'}`} target='_blank' rel='noreferrer'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Newsitem
