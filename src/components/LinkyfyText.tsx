import Link from "next/link";

interface propsType {
  text: string;
  keyword?: string | undefined;
  link?: string | undefined;
}

export default function LinkyfyText({ text, keyword, link }: propsType) {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return (
    <span>
      {parts?.map((part, i) =>
        part.toLowerCase() === keyword?.toLowerCase() ? (
          <Link key={i} href={link}>
            {part}
          </Link>
        ) : (
          <p key={i}></p>
        )
      )}
    </span>
  );
}
