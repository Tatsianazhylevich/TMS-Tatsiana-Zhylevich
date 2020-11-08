import React from 'react';
import { Button } from './Components/Button'
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {value:0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({value: this.state.value + 1})
  }
  decrement() {
    this.setState({value: this.state.value - 1})
  }
  reset() {
    this.setState({value: 0})
  }
  render(){
    return (
      <div className={styles.container}>
      <div className={styles.counter}>{this.state.value}</div>
      <div className={styles.buttonsPanel}>
      <Button className={styles.decrement} onClick={this.decrement} >-</Button>
      <Button className={styles.reset} onClick={this.reset}>0</Button>
      <Button className={styles.increment} onClick={this.increment}>+</Button>
      </div>
    </div>
    )  
  }

}

export default App;
