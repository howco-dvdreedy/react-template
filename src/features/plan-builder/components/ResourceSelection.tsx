import { Box, Badge, Flex, VStack, Center, UnorderedList, Grid } from '@chakra-ui/react';
export const ResouceSelection = () => {
   const resources = [
      'saw',
      'CNC Lathe',
      'Bore',
      'CNC Program',
      'HeatTreat',
      'Stamp',
      'Hone',
      'Ship',
      'Lathe',
      'Receive',
      'Thread',
      'Pack',
      'NDT',
      'Inspection',
      'QA',
      'Final Inspection',
      'QC',
      'Testing',
      'Trepan',
      'Drift',
      'Phosphate',
      'Clean',
      'Straighten',
      'Bead Blasting',
      'CNC Mill',
      'Outside Processing'
   ];

   return (
      <Box backgroundColor='white' border='1px solid black' p ={4}>
         <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                  {resources.map((resource) => (
                     <Badge m ={1} w={150} h={30} colorScheme="blue" variant="solid">
                        <Center h="100%">{resource}</Center>
                     </Badge>
                  ))}
         </Grid>
      </Box>
   );
};