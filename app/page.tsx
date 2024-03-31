"use client";

import {
  Card,
  CardBody,
  
} from "@nextui-org/react";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";
import Http from "./http";
import { FaGithub } from "react-icons/fa";
import { projects,projectSkeleton } from "./Components/project";
import { Skills } from "./Components/skill";
import { AboutMe } from "./Components/about";


var http = new Http();

export default function Home() {
  const [repos, setRepos] = useState(null);
   
  useEffect(() => {
    http.get_repos({ state: repos, setState: setRepos });
  }, []);

  return (
    <main className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col space-y-5 md:max-w-[960px]">
        <div className="flex-col px-6">
          <Card>
            <CardBody>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start">
                <Image src="/profile.jpg" className="md:max-w-[200px] rounded-xl" width={200} height={200} alt="author"></Image>
                <div className="flex flex-col">{AboutMe()}</div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <p>Skills</p>
        </div>
        <div className="px-6 md:columns-3 space-y-4">{Skills()}</div>
        <p>Projects</p>
        <div className="px-6 flex flex-col grid-cols-3 gap-4 md:grid md:w-[960px]">
          {repos == null ? (
            projectSkeleton()
          ) : (
            projects(repos)
          )}
        </div>
      </div>
    </main>
  );
}
