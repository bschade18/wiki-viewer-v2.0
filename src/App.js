import React from "react";
import "./App.css";

const enterKey = 13;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: {},
      page2: {},
      page3: {},
      page4: {},
      page5: {},
      page6: {},
      search: "",
      view: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.keyCode === enterKey) {
      this.handleSubmit();
    }
  }

  handleSubmit(event) {
    const encode = encodeURIComponent(this.state.search);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srlimit=6&srsearch=${encode}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          page1: data.query.search[0],
          page2: data.query.search[1],
          page3: data.query.search[2],
          page4: data.query.search[3],
          page5: data.query.search[4],
          page6: data.query.search[5],
          view: true
        })
      )
      .catch(error => console.log(error));
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      search: value
    });
    setTimeout(() => {
      if (this.state.search === "") {
        this.setState({
          view: false
        });
      }
    }, 100);
  }

  render() {
    const title1 = this.state.page1.title;
    const title2 = this.state.page2.title;
    const title3 = this.state.page3.title;
    const title4 = this.state.page4.title;
    const title5 = this.state.page5.title;
    const title6 = this.state.page6.title;

    const link1 = "https://en.wikipedia.org/?curid=" + this.state.page1.pageid;
    const link2 = "https://en.wikipedia.org/?curid=" + this.state.page2.pageid;
    const link3 = "https://en.wikipedia.org/?curid=" + this.state.page3.pageid;
    const link4 = "https://en.wikipedia.org/?curid=" + this.state.page4.pageid;
    const link5 = "https://en.wikipedia.org/?curid=" + this.state.page5.pageid;
    const link6 = "https://en.wikipedia.org/?curid=" + this.state.page6.pageid;

    return (
      <div className="container">
        <p className="heading">
          <a
            id="RandomLink"
            href="https://en.wikipedia.org/wiki/Special:Random"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Click here for a random Wikipedia article
          </a>
        </p>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="search..."
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        {this.state.view ? (
          <div className="result-container">
            <a
              className="links"
              href={link1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title1}</p>
            </a>
            <a
              className="links"
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title2}</p>
            </a>
            <a
              className="links"
              href={link3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title3}</p>
            </a>
            <a
              className="links"
              href={link4}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title4}</p>
            </a>
            <a
              className="links"
              href={link5}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title5}</p>
            </a>
            <a
              className="links"
              href={link6}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="results">{title6}</p>
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
