import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHidden: true, isLastNameHidden: true}

  hideDisplayFirstName = () => {
    this.setState(prevState => {
      if (prevState.isFirstNameHidden === true) {
        return {isFirstNameHidden: false}
      }
      return {isFirstNameHidden: true}
    })
  }

  hideDisplayLastName = () => {
    this.setState(prevState => {
      if (prevState.isLastNameHidden === true) {
        return {isLastNameHidden: false}
      }
      return {isLastNameHidden: true}
    })
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="names-container">
            <div className="first-container">
              <button
                type="button"
                className="button"
                onClick={this.hideDisplayFirstName}
              >
                Show/Hide Firstname
              </button>
              {!isFirstNameHidden && (
                <div className="first-name-container">
                  <p className="first-name">Joe</p>
                </div>
              )}
            </div>
            <div className="last-container">
              <button
                type="button"
                className="button"
                onClick={this.hideDisplayLastName}
              >
                Show/Hide Lastname
              </button>
              {!isLastNameHidden && (
                <div className="last-name-container">
                  <p className="last-name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
