import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KnowledgeBlog = () => {
  return (
    <section className="flex justify-center w-full h-[800px]  mt-[70px]">
      <div className="text-white flex flex-col max-w-[1080px] w-full h-[800px] p-6 space-y-6  ">
        <div className="text-4xl">Knowledge</div>
        <div className="grid grid-cols-3 gap-4">
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
        </div>
      </div>
    </section>
  );
};

const KnowledgeCard = () => {
  return (
    <Card className="w-[300px] h-[300px]">
      <CardHeader className="h-[150px] w-full border-2 bg-gray-500 rounded-xl"></CardHeader>
      <CardContent className="flex flex-col h-[110px]">
        <span className="text-2xl mt-2">Lorem, ipsum dolor</span>
        <div className="h-full flex items-center w-full">
          <span className="text-muted-foreground text-start line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            deserunt voluptatibus aliquam numquam, cupiditate ipsam minima
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-evenly ">
        <Button size="sm" variant="outline">
          Javascript
        </Button>
        <Button size="sm" variant="outline">
          NextJS
        </Button>
        <Button size="sm" variant="outline">
          NextAuth
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KnowledgeBlog;
