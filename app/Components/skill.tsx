import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";

interface skillProp {
    name: string;
    amont: number;
}


function Skill(lang: string, skills: Array<skillProp>) {
    return (
        <Card className="h-auto flex flex-col justify-start items-center" key={lang}>
          <CardHeader className="text-center font-bold">{lang}</CardHeader>
          <CardBody>
            <Card>
              <CardBody>
                {skills.map((value) => (
                  <Progress key={value.name}
                    label={value.name}
                    value={value.amont}
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
          { name: "Test", amont: 50 },
          { name: "Test", amont: 50 },
          { name: "Test", amont: 10 },
        ])}
        {Skill("Javascript", [
          { name: "Test", amont: 10 },
          { name: "Test.js", amont: 10 },
        ])}
        {Skill("Dart", [{ name: "Flutter", amont: 10 }])}
      </>
    );
  }