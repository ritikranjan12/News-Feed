import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export default class News extends Component {
    
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    static dafaultProps = {
        country:'in',
        pagesize: 6,
        category: 'general'
    }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading:false,
            page:1,
            
        }
        document.title = `NewsFeed - ${this.props.category}`
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44c6b5a3a2ad485b9308dac6e3597cae&page=1&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles:parseddata.articles, totalresults:parseddata.totalResults})
    }

    handlenextclick = async() =>{
        if(this.state.page+1 > Math.ceil(this.state.totalresults/this.props.pagesize)) {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44c6b5a3a2ad485b9308dac6e3597cae&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
            let data = await fetch(url);
            let parseddata = await data.json();
            window.scrollTo(0,0);
            this.setState({
                page:this.state.page+1,
                articles:parseddata.articles
            })
        }
        
    }

    handleprevclick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44c6b5a3a2ad485b9308dac6e3597cae&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parseddata = await data.json();
        window.scrollTo(0,0);
        this.setState({
            page:this.state.page-1,
            articles:parseddata.articles
        })
    }
  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>NewsFeed - Top HeadLines</h2>
        <div className="row">
            {this.state.articles.map((element)=> {
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author?element.author:"Anonymous"} date={element.publishedAt} source={element.source.name} />
                    </div> 
                })}
        </div>
        <div className="container  d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button'onClick={this.handleprevclick} className='btn btn-secondary '>❮Previous</button>
            <button  type='button' disabled={this.state.page+1 > Math.ceil(this.state.totalresults/this.props.pagesize)} onClick={this.handlenextclick} className='btn btn-success'>Next❯</button>
        </div>
      </div>
    )
  }
}
