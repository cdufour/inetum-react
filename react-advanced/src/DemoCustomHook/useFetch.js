import { useState, useEffect } from "react"

const useFetch = (url, numElems) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return data.slice(0, numElems);
}

export default useFetch