import Link from "next/link";
import { useRouter } from "next/router";

import { introduction } from "@/resources/lib/data";

import { volumes } from "@/resources/lib/data";

const Volumes = () => {
  const router = useRouter();

  function getRandomElement(array) {
    const randomVolume = array[Math.floor(Math.random() * array.length)];

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => getRandomElement(volumes)}>Randowm Volumes</button>
    </>
  );
};

export default Volumes;
