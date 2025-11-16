interface TableHeadProps {
  columns: string[];
  colSpans?: number[];
}

export default function TableHead({ columns, colSpans }: TableHeadProps) {
  // Default equal distribution if no colSpans provided
  const defaultColSpans =
    colSpans || columns.map(() => Math.floor(12 / columns.length));

  return (
    <div className="grid grid-cols-12 py-4 lg:py-8 mb-4 lg:mb-8">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`col-span-${
            defaultColSpans[index]
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
