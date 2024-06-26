import { IssueStatusBadge } from "@/app/_components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueDetials = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex className="space-x-3" align={"center"} gapX={"3"} my={"2"}>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt={"4"}>
        <Markdown>{issue?.description}</Markdown>
      </Card>
    </>
  );
};

export default IssueDetials;
