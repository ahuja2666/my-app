import App2 from "./App2";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"


const App = () => {

  const [data, usedata] = useState([])
  const getData = async () => {
    const res = await fetch("http://localhost:3004/user")
    const actualData = await res.json();
    usedata(actualData)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="header">
        <img className="logo" height="70" width="250" src="https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png" alt="logo" />

        <div className="cam">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
        </div>

      </div>

      {data.map((obj, i) => {
        return <App2 key={i} allinfo={obj} />
      })}




    </>
  )


}

export default App;