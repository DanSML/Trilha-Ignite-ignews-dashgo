import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Dan Maia</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            danlagoa739@gmail.com
          </Text>
        </Box>)}
        
      <Avatar size="md" name="Dan Maia" src="https://github.com/DanSML.png" />
    </Flex>
  );
}