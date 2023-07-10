import {
   Card,
   Heading,
   CardHeader,
   CardFooter,
   CardBody,
   Stat,
   StatLabel,
   StatNumber,
   Badge,
   Center,
   Text,
   Divider,
} from '@chakra-ui/react';

type WorkItemProps = {
   resource: string;
};

export const WorkItem = ({ resource }: WorkItemProps) => {
   return (
      <Card h="250px" w="200px">
         <CardHeader>
            <Center>
               <Heading size="sm">
                  <Text> Process</Text>
               </Heading>
            </Center>
         </CardHeader>
         <Divider />
         <CardBody>
            <Center>
               <Badge p={0} w={150} h={30} colorScheme="cyan" variant="solid">
                  <Center h="100%">{resource}</Center>
               </Badge>
            </Center>
         </CardBody>
         <CardFooter>
            <Center>
               <Stat>
                  <StatLabel>Total Time</StatLabel>
                  <StatNumber>12:00 Hrs</StatNumber>
               </Stat>
            </Center>
         </CardFooter>
      </Card>
   );
};
