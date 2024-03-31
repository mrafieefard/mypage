import { Card, CardBody, CardHeader, Link, Progress } from "@nextui-org/react";

interface skillProp {
  name: string;
  link: string | null;
  progress: number;
}

function convertSkillColor(progress : number){
  if (progress < 50){
    return "primary"
  }else if (progress >= 50 && progress < 70){
    return "warning"
  }else if (progress >= 70){
    return "success"
  }
}

function Skill(lang: string, skills: Array<skillProp>) {
  return (
    <Card
      className="h-auto flex flex-col justify-start items-center"
      key={lang}
    >
      <CardHeader className="text-center font-bold">{lang}</CardHeader>
      <CardBody>
        <Card>
          <CardBody>
            {skills.map((value) => (
              <Progress
              color={convertSkillColor(value.progress)}
                key={value.name}
                label={
                  value.link ? (
                    <Link href={value.link}>{value.name}</Link>
                  ) : (
                    value.name
                  )
                }
                value={value.progress}
                showValueLabel
                className="w-full mb-4"
              ></Progress>
            ))}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}

export function Skills() {
  return (
    <>
      {Skill("Python", [
        {
          name: "Flask",
          progress: 40,
          link: "https://flask.palletsprojects.com/en",
        },
        { name: "Selenium", progress: 60, link: "https://www.selenium.dev/" },
        {
          name: "BeautifulSoup",
          progress: 40,
          link: "https://www.crummy.com/software/BeautifulSoup/",
        },
        {
          name: "Telethon",
          progress: 30,
          link: "https://github.com/LonamiWebs/Telethon",
        },
        {
          name: "Discord.py",
          progress: 80,
          link: "https://github.com/Rapptz/discord.py",
        },
        {
          name: "Instagrapi",
          progress: 70,
          link: "https://github.com/subzeroid/instagrapi",
        },
      ])}
      {Skill("Javascript", [
        { name: "Next.js", progress: 20, link: "https://nextjs.org/" },
        { name: "React", progress: 25, link: "https://reactjs.org/" },
        { name: "Material Ui", progress: 10, link: "https://mui.com/" },
        { name: "NextUi", progress: 15, link: "https://nextui.org/" },
      ])}
      {Skill("Web", [
        { name: "HTML / CSS", progress: 70, link: null },
        { name: "Tailwind", progress: 40, link: "https://tailwindcss.com/" },
      ])}
      {Skill("Dart", [{ name: "Flutter", progress: 35, link: "https://flutter.dev/" }])}
    </>
  );
}
