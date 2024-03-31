import { Link } from "@nextui-org/react";

export function AboutMe() {
    return (
      <>
        <p className="text-left font-bold text-xl">Hey, I'm Mohamamd</p>
        <p className="text-left  text-gray-400">
          Welcome to my webpage! I'm Mohammad Rafieefard, born on July 25th, 2007
          in Iran Isfahan. I'm a junior full-stack developer proficient in Python,
          JavaScript, React, and Flutter. Currently, I'm actively learning and
          sharing my projects on <Link
            showAnchorIcon
            target="_blank"
            href="https://github.com/mrafieefard"
          >
            Github
          </Link>
          so that others can benefit from them. Feel free to explore and utilize
          my work!
        </p>
      </>
    );
  }