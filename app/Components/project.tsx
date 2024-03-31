import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Skeleton,
} from "@nextui-org/react";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";

function formatLastUpdate(lastUpdate: string): string {
  const currentTime: Date = new Date();
  const lastUpdateTime: Date = new Date(lastUpdate);

  const timeDifference: number =
    currentTime.getTime() - lastUpdateTime.getTime();
  const secondsDifference: number = Math.floor(timeDifference / 1000);

  const minute: number = 60;
  const hour: number = minute * 60;
  const day: number = hour * 24;
  const week: number = day * 7;
  const month: number = day * 30; // Approximation
  const year: number = day * 365; // Approximation

  if (secondsDifference < minute) {
    return `${secondsDifference} second${
      secondsDifference === 1 ? "" : "s"
    } ago`;
  } else if (secondsDifference < hour) {
    const minutes: number = Math.floor(secondsDifference / minute);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (secondsDifference < day) {
    const hours: number = Math.floor(secondsDifference / hour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (secondsDifference < week) {
    const days: number = Math.floor(secondsDifference / day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (secondsDifference < month) {
    const weeks: number = Math.floor(secondsDifference / week);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  } else if (secondsDifference < year) {
    const months: number = Math.floor(secondsDifference / month);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years: number = Math.floor(secondsDifference / year);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}

function project(
  title: string,
  description: string,
  image: string = "",
  github_link: string,
  last_update: string
) {
  return (
    <Card
      className="h-[400px] w-full flex flex-col justify-start items-center"
        
    >
      <CardHeader>
        <p>{title}</p>
      </CardHeader>
      <Divider />
      <CardBody
        className={`flex flex-row ${
          description != null
            ? "justify-start items-start"
            : "justify-center items-center"
        } overflow-hidden`}
      >
        {description != null ? (
          <>
            <Card>
              <CardBody>
                {image == "" || null ? (
                  <div className="size-[90px] flex flex-col justify-center align-middle text-center">
                    <span className="font-bold text-5xl ">
                      {title.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                ) : (
                  <Image className="h-[80px] min-h-[80px]" width={80} height={80} src={image} alt={title}></Image>
                )}
              </CardBody>
            </Card>
            <div className="container text-justify clearfix absolute w-full">
              <div className="w-[125px] h-[100px] inline-block float-left px-8"></div>
              <div className="flex-grow pr-8">
                <p>{description}</p>
              </div>
            </div>
          </>
        ) : (
          <Card>
            <CardBody>
              {image == "" || null ? (
                <div className="size-[200px] flex flex-col justify-center align-middle text-center">
                  <span className="font-bold text-5xl ">
                    {title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              ) : (
                <Image className="size-full" src={image} width={80} height={80} alt={title}></Image>
              )}
            </CardBody>
          </Card>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex w-full justify-between">
          <p>Last update {last_update}</p>
          <Link
            isExternal
            showAnchorIcon
            href={github_link}
            anchorIcon={<FaGithub className="size-5" />}
          ></Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export function projectSkeleton() {
  return (
    <Card className="h-[400px] w-full flex flex-col justify-start items-center">
      <CardHeader>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row justify-start items-start gap-2 w-full">
        <Skeleton className="w-[100px] rounded-lg">
          <div className="h-[100px] rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] rounded-lg">
            <div className="h-4  rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-1/5 rounded-lg">
            <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex w-full justify-between">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-4 rounded-lg">
            <div className="h-4 w-4 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </CardFooter>
    </Card>
  );
}

export function projects(repos: Array<any>) {
  return (
    <>
      {repos.map((value) => {
        if (!value.disabled) {
          return project(
            value.name.replace("-", " "),
            value.description,
            "",
            value.html_url,
            formatLastUpdate(value.commited_at)
          );
        }
      })}
    </>
  );
}
