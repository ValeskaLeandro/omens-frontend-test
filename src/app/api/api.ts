export const getMovies = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {mode: 'no-cors' })
  if(!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}