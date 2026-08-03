import { marquee } from "@/lib/content";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="label flex shrink-0 items-center text-fog"
    >
      {marquee.map((term) => (
        <span key={term} className="flex items-center whitespace-nowrap">
          {term}
          <span className="mx-8 text-lime">·</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-4">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
