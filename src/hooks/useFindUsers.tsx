import useSwr from "./useSwr"

export const useFindUsers = () => {
  const {
    data,
    error
  } = useSwr("https://jsonplaceholder.typicode.com/users")

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

