import Head from "next/head";
import { CarCard, CarProps } from "../../components/common/carCard";
import { useEffect, useState } from "react";
import Link from "next/link";

interface DataProp {
  count: number;
  next: string;
  previous: null | string;
  results: CarProps[];
}

export default function Home() {
  const [data, setData] = useState<DataProp>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/vehicles/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Vitrine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-2 px-5 py-3 rounded-md max-w-[1200px] lg:mx-auto">
        <h2 className="uppercase font-light col-span-2">Carros usados</h2>
        <div className="container-carros">
          {isLoading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            <>
              {" "}
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {data?.results.map((car: any) => (
                  <CarCard car={car} key={car.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="container-pages flex justify-center gap-3 px-5 py-3 rounded-md max-w-[1200px] lg:mx-auto">
        {data?.previous && (
          <Link className="bg-customBlack-300 py-2 px-5 text-white font-bold rounded-sm" href={`/carros-usados/${data?.previous.split("?")[1]}`}>
            Anterior
          </Link>
        )}
        <Link className="bg-customBlack-300 py-2 px-5 text-white font-bold rounded-sm" href={`/carros-usados/${data?.next.split("?")[1]}`}>Próxima</Link>
      </div>
    </>
  );
}