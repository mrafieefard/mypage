import { Card, CardBody, CardHeader, Link, Progress } from "@nextui-org/react";
const config = require("../../mypage.config.json");

interface skillProp {
  name: string;
  link: string | null;
  progress: number;
}

function convertSkillColor(progress : number){
  if (progress < 50){
    return "warning"
  }else if (progress >= 50 && progress < 70){
    return "primary"
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
                    <Link color={convertSkillColor(value.progress)} target="_blank" href={value.link}>{value.name}</Link>
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

function parseSkillConfig(){
  const skills = []
  for (const skill in config.skills){
    skills.push(Skill(skill,config.skills[skill]))
  }
  return skills
}

export function Skills() {
  return (
    <>
      {
        parseSkillConfig()
      }
    </>
  );
}
