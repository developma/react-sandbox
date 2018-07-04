import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SplitterLayout from 'react-splitter-layout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(event) {
    console.log('resize', event)
    this.setState({
      innerWidth: event.target.innerWidth,
      innerHeight: event.target.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillMount() {
    window.addEventListener('resize', null)
  }

  render() {
    return (
      <SplitterLayout percentage>
        <div className="pane1" style={{ height: '100%' }}>
          Left Pane
          <br />
          {this.state.innerHeight}
          <br />
          {this.state.innerWidth}
        </div>
        <div>
          Right Pane
          <div className="pane2" style={{ height: '100px' }}>
            pane2
          </div>
          <div
            className="pane3"
            style={{
              position: 'absolute',
              top: '100px',
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            pane3
          </div>
        </div>
      </SplitterLayout>
    )
  }
}

export default App
