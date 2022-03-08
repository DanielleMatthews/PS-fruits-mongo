const React = require('react')

class Show extends React.Component {
  render(){
    const fruit = this.props.fruit
    return (
      <div>
        <h1>Fruits Show Page</h1>
        The {fruit.name} is {fruit.color}.
        {fruit.readyToEat ? ' Its ready to eat!!' : ' It is not ready to eat...so no touchy!'}
      </div>
    )
  }
}

module.exports = Show