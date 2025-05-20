import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card.Root>
      <Skeleton height={"200px"} width={"350px"} />
      <CardBody>
        <SkeletonText noOfLines={3} gap={2} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeletion;
