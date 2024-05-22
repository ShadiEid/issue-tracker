import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueDetialPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  await delay(2000);

  return (
    <Box>
      <Heading>{issue?.title}</Heading>
      <Flex align={"center"} gapX={"3"} my={"2"}>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <Markdown>{issue?.description}</Markdown>
      </Card>
    </Box>
  );
};

export default IssueDetialPage;
