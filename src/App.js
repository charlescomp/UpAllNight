var React = require('react'),
    ReactDOM = require('react-dom'),
    Form = require('./Form'),
    MapSection = require('./Map');

require("./App.css");
console.log(<MapSection/>)

var App = React.createClass({
  getInitialState() {
    return {
        name: "",
        address: "",
        coor: [{lat: 0.0, long: 0.0}],
        wifi: true,
        outlets: "",
        seating: "",
        closingTime: "", 
        zipcode: 0,
        distane: 0
    }
  },
  handleZipCode() {
    this.setState({zipcode: event.target.value})
  },
  handleDistance(){
    console.log(event.target.value)
    this.setState({})
  },
  render() {
    return (
      <div className="main">
        <Form 
          handleZipCode={this.handleZipCode} 
          handleDistance={this.handleDistance}/>
        <MapSection />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
