import React, { useState } from "react"
import { Helmet } from "react-helmet"

export default () => {

  const [count, setCount] = useState(0);

  return (
    <div style={{ color: `purple` }}>
      <Helmet>
        <title>Filter parkruns</title>
      </Helmet>
      <h1>LOLZ FILTERS!!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>)
};