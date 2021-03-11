import { App } from './components'

Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById('app'))
})
