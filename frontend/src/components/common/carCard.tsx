import Link from "next/link";

export interface CarProps {
  car: {
    id: string;
    photo: string;
    model: string;
    brand: string;
    condition: string;
    color: string;
    price: string;
    city: string;
  };
}

export function CarCard({ car } : CarProps) {
  return (
    <li className="rounded-md border shadow-md" key={car.id}>
      <Link href="/">
        <div>
          <img
            className="object-contain"
            src={car.photo}
            alt={`${car.model} - ${car.brand}`}
          />
        </div>
        <div className="p-3">
          <h3 className="text-xl font-bold">
            {car.brand} {car.model}
          </h3>
          <p className="text-gray-600 font-semibold">
            {car.condition} - {car.color} - {car.city}
          </p>
          <strong className="text-blue-600 text-xl">R${car.price}</strong>
        </div>
      </Link>
    </li>
  );
}
