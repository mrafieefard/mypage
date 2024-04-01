import { Link } from "@nextui-org/react";
import reactStringReplace from "react-string-replace";

const config = require("../../mypage.config.json");

function convertDescription(text: string) {
  let description;
  let linksRegex = "";
  for (const key in config.links) {
    linksRegex += `${key}|`;
  }
  console.log(linksRegex.substring(0, -1));
  description = reactStringReplace(
    text,
    RegExp(`\\b(${linksRegex.substring(0, linksRegex.length - 1)})\\b`),
    (match) => (
      <Link
        key={match}
        showAnchorIcon
        target="_blank"
        href={config.links[match]}
      >
        {match}
      </Link>
    )
  );
  return description;
}

export function AboutMe() {
  return (
    <>
      <p className="text-left font-bold text-xl">{config.about.title}</p>
      <p className="text-left  text-gray-400">
        {convertDescription(config.about.description)}
      </p>
    </>
  );
}
