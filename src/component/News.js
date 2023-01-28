import React, {useEffect, useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loding, setloding] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
   

  const updateNews= async() =>{
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5478db0d21374733b9c1bc7b7656468b&page=${page}&pageSize=${props.pageSize}`;
    
    props.setprogress(40);
    setloding(true)
    let data = await fetch(url);
    let pasedData = await data.json();
    props.setprogress(80);
    setArticles(pasedData.articles);
    settotalResults(pasedData.totalResults);
    setloding(false)
    props.setprogress(100);
  }
    useEffect(()=>{
        updateNews();
        document.title = `DainikBhaskar - ${capitalizeFirstLetter(props.category)} News`;
        // eslint-disable-next-line
    }, [])
    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    };
    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // }

    // const handleNextClick = async () => { 
    //     setPage(page+1)
    //     updateNews()
    // }
  const fetchMoreData = async () => {  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5478db0d21374733b9c1bc7b7656468b&page=${page + 1}&pageSize=${props.pageSize}`;
    // const uniqueData = [new Set(url)];
    setPage(page +1)
    let data = await fetch(url);
    let pasedData = await data.json();
    setArticles(articles.concat(pasedData.articles));
    settotalResults(pasedData.totalResults);
  };
  

    return (
      <div className="mt-4" style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className="text-center pt-5">{`DainikBhaskar - Top ${capitalizeFirstLetter(props.category)} headlines`}</h1>
        {loding && <Spinner />}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={!loding &&<Spinner />}>
          <div className="container">
            <div className="d-flex my-4 border-top" style={{ width: "100%" }}>
              <div className="row my-4 border-end border-start" style={{ width: "auto" }}>
                {articles.map((element) => {
                  return (
                    <div className="col-md-8" style={{ width: "100%" }} key={element.url}>
                      <Newsitem newsurl={element.url} discruption={element.description} title={element.title} urlImage={element.urlToImage}
                        publishedAt={element.publishedAt} author={element.author} content={element.content} source={element.source.name}
                        category={props.category} mode= {props.mode} toglemode = {props.toglemode}/>
                    </div>);
                })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
}
News.defaultProps = {country: "in", pageSize: 10, category: "business"};
News.propTypes = {country: PropTypes.string, pageSize: PropTypes.number, category: PropTypes.string};
export default News;
