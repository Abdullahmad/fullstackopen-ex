import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
