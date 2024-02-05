import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <h1>{character.firstName}</h1>;
}
