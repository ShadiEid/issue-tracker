import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  statuses: { open: number; inProgress: number; closed: number };
}

const IssueSummary = ({ statuses: { open, inProgress, closed } }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex style={{ width: "100%" }} gap={"4"}>
      {containers.map((container) => (
        <Card key={container.status}>
          <Flex direction={"column"} gap={"2"}>
            <Link href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
            <Text size={"5"} className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
