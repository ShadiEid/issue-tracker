import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const loading = () => {
  return (
    <Box>
      <Skeleton className="max-w-xl" />
      <Flex align={"center"} gapX={"3"} my={"2"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default loading;
