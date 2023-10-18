import useSwr from "./useSwr"

export const useFindUserById = (id: string) => {
  const {
    data,
    error
  } = useSwr(`https://jsonplaceholder.typicode.com/users/${id}`)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

