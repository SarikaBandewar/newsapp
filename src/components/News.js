import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async updateNews() {
    // console.log('page : ' + this.state.page);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3a5bb94220d40fc8f53ad246e97e127&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 });
    // console.log('Next : ' + this.state.page);
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3a5bb94220d40fc8f53ad246e97e127&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          Top {this.capitalize(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((elem) => {
                return (
                  <div key={elem.url} className="col-md-4">
                    <NewsItems
                      title={elem.title}
                      description={elem.description}
                      imgurl={elem.urlToImage}
                      newsurl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
