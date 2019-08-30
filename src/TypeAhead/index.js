import React from "react";
import classNames from "classnames/bind";
import styles from "./style.css";
import * as R from "ramda";
const cx = classNames.bind(styles);

class TypeAhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.cities = [];
  }

  componentDidMount() {
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
        this.cities.push(...data);
        console.log(this.cities[0]);
        console.log(this.cities.length);
      });
  }

  componentWillUnmount() {}
  onKeyUp(e) {
    // console.log(e);
  }
  onChange(e) {
    console.log(e.target.value);
    const filter = wordToMatch => {
      return place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
      };
    };
    const cities = R.filter(filter(e.target.value), this.cities);
    console.log(cities.length);
    this.setState({
      searchKey: e.target.value,
      suggestions: cities
    });
  }
  render() {
    const numberWithCommas = R.compose(
      R.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      R.toString
    );
    const getSuggestion = R.map(suggestion => {
      const cityName = suggestion.city;
      const stateName = suggestion.state;
      return (
        <li key={cityName + stateName}>
          <span className={cx("name")}>
            {cityName}, {stateName}
          </span>
          <span className={cx("population")}>
            ${numberWithCommas(suggestion.population)}
          </span>
        </li>
      );
    });
    return (
      <div>
        <form className={cx("search-form")}>
          <input
            type="text"
            className={cx("search")}
            placeholder="City or State"
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            value={this.state.searchKey}
          />
        </form>
        <ul className={cx("suggestions")}></ul>
        {getSuggestion(this.state.suggestions)}
      </div>
    );
  }
}

export default TypeAhead;
