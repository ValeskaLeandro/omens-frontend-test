export const getMovies = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    if(!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error; 
  }
}