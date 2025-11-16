interface TableHeadProps {
  columns: string[];
  colSpans?: number[];
}

// Map col-span values to actual Tailwind classes
const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

export default function TableHead({ columns, colSpans }: TableHeadProps) {
  // Default equal distribution if no colSpans provided
  const defaultColSpans =
    colSpans || columns.map(() => Math.floor(12 / columns.length));

  return (
    <div className="grid grid-cols-12 py-4 lg:py-8 mb-4 lg:mb-8">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`${
            colSpanMap[defaultColSpans[index]]
          } pl-0 pr-12 lg:px-24 text-10 lg:text-14 leading-24 black-italic text-neutral-invert-subdued uppercase ${
            index === columns.length - 1 ? "text-right" : ""
          }`}
        >
          {column}
        </div>
      ))}
    </div>
  );
}
