import { useEffect, useState } from 'react'

const useHttpRequest = (url, {method, headers, body, key}) => {
  const [loading, setLoading] = useState(false)
	const [totalSize, setTotalSize] = useState(0)
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

  useEffect(() => {
    const makeRequest = () => {
      try {
        setLoading(true)
        if (key) {
          const cache = localStorage.getItem(key)
          if (cache) {
            setData(JSON.parse(cache))
            setLoading(false)
            return
          }
        }
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value)
          })
        }
        xhr.onprogress = (e) => {
          if (e.lengthComputable) {
            setProgress((e.loaded / e.total) * 100)
						setTotalSize(e.total)
          }
        }
        xhr.onload = () => {
					if (xhr.status >= 200 && xhr.status < 300) {
						const response = JSON.parse(xhr.response)
						setData(response)
						setLoading(false)
						if (requestKeys) {
							requestKeys.forEach((key) => {
								localStorage.setItem(key, JSON.stringify(response))
							})
						}
					} else {
						throw new Error(`Request failed with status ${xhr.status}`)
					}
				}
				xhr.onerror = () => {
					throw new Error('Request failed')
				}
				xhr.send(body)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    makeRequest()
  },[url, method, headers, body, key])

  return { error, data, loading, progress, totalSize }
}

export default useHttpRequest