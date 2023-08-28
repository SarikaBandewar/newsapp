import React, { Component } from 'react';
import NewsItems from './NewsItems';

export default class News extends Component {
  articles = [
    {
      source: { id: 'news24', name: 'News24' },
      author: 'Heinz Schenk',
      title:
        "Big week for women's cricket clouded by Proteas coaching saga: Moreeng denies rift",
      description:
        "The celebration of the establishment of CSA's professional women's league has been tempered by the Proteas' reported reservations over head coach Hilton Moreeng's contract being extended.",
      url: 'https://www.news24.com/sport/cricket/proteas/big-week-for-womens-cricket-clouded-by-proteas-coaching-saga-moreeng-denies-rift-20230827',
      urlToImage:
        'https://cdn.24.co.za/files/Cms/General/d/377/d8d52ef9ff174d6c91f7b273d544832b.jpg',
      publishedAt: '2023-08-27T07:11:58',
      content:
        "When Cricket South Africa (CSA) announced earlier this week – in somewhat awkward fashion at times – that it was launching a professional women's league, it was supposed to be met with unbridled opti… [+313 chars]",
    },
    {
      source: { id: 'espn-cric-info', name: 'ESPN Cric Info' },
      author: null,
      title:
        'PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com',
      description:
        'Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com',
      url: 'http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket',
      urlToImage:
        'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg',
      publishedAt: '2020-04-27T11:41:47Z',
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: 'espn-cric-info', name: 'ESPN Cric Info' },
      author: null,
      title:
        'What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com',
      description:
        'Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com',
      url: 'http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again',
      urlToImage:
        'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg',
      publishedAt: '2020-03-30T15:26:05Z',
      content:
        'Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]',
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 20,
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c3a5bb94220d40fc8f53ad246e97e127&pageSize=20';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c3a5bb94220d40fc8f53ad246e97e127&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c3a5bb94220d40fc8f53ad246e97e127&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey- Top News</h2>

          <div className="row">
            {this.state.articles.map((elem) => {
              return (
                <div key={elem.url} className="col-md-4">
                  <NewsItems
                    title={elem.title}
                    description={elem.description}
                    imgurl={elem.urlToImage}
                    newsurl={elem.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-dark"
                disabled={this.state.page <= 1}
                onClick={this.handlePreviousClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                disabled={
                  Math.ceil(this.state.totalResults / 20) <= this.state.page
                }
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
