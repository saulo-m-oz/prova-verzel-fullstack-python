interface CarProps {
  reason: {
    id: number;
  };
}

export function ReasonCard({ reason }: CarProps) {
  return (
    <li key={reason.id} className="rounded-md border shadow-sm p-5">
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fuga
        reiciendis aliquid voluptas, perferendis nihil? Perspiciatis, assumenda
        quo tenetur, recusandae necessitatibus magnam tempore obcaecati dicta
        odio totam cum nam rerum!
      </p>
      <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fuga
        reiciendis aliquid voluptas, perferendis nihil? Perspiciatis, assumenda
        quo tenetur, recusandae necessitatibus magnam tempore obcaecati dicta
        odio totam cum nam rerum!
      </p>
    </li>
  );
}
