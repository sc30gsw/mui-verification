import { CircularProgress, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/ping')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
  }, [])

  return (
    <Stack p={4}>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="body1">fetch example</Typography>
      {isLoading && <CircularProgress />}
      {data && <code>{JSON.stringify(data, null, 2)}</code>}
    </Stack>
  )
}
