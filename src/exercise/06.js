// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const usernameInputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    // const username = event.target.elements[0].value
    // const username = event.target.elements.username.value
    const username = usernameInputRef.current.value
    onSubmitUsername(username)
  }

  const [error, setError] = React.useState(null) // 2
  const [username, setUsername] = React.useState('') // 3

  const handleChange = event => {
    const usernameFromInput = usernameInputRef.current.value
    const isValid = usernameFromInput === usernameFromInput.toLowerCase() // 2
    setError(isValid ? null : 'Username must be lower case') // 2
    setUsername(usernameFromInput.toLowerCase()) // 3
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInputRef}
          onChange={handleChange}
          id="username"
          type="text"
          value={username}
        />
        {/* 2 */}
        {/* {error ? (
          <p role="alert" style={{color: 'red'}}>
            {error}
          </p>
        ) : null} */}
      </div>
      {/* 2 */}
      {/* <button type="submit" disabled={error ? true : false}>
        Submit
      </button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
