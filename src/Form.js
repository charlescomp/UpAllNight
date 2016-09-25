var React = require('react')

var Form = React.createClass({
  render() {
    return(
      <div>
        <form>
          <div className="searchContainer">
            <input onChange={this.props.handleZipCode}>
            </input>
            <button className="studyButton">Study!</button>
          </div>
          <section>
            <p>WIFI</p>
            <button>YES</button>
            <button>NO</button>
          </section>
          <section>
            <p>DISTANCE</p>
            <select onChange={this.props.handleDistance}>
              <option>5 miles</option>
              <option>10 miles</option>
              <option>20 miles</option>
            </select>
          </section>
        </form>
      </div>
    )
  }
})

module.exports = Form