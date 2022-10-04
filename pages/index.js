import Link from "next/link";
import Image from "next/image";
import picc from '../public/images/pic1.jpg';
import { Flex, Box, Text, Button } from "@chakra-ui/react";



// Functional component with instat return

const Banner = ({
  // props
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontsize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontsize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontsize="lg" paddingTop="3" paddingBottom="3" color="gray.7000">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);



export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner
        purpose="RENT A HOUSE"
        title1="Rental Houses for"
        title2="Everyone"
        desc1="Explore Home Apartments Villas"
        desc2="and more"
        buttonText="Explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl = {picc}

      />
      
      {/* <Banner
      /> */}
      {/* <Banner 
        purpose={'For rent'}/> */}
    </div>
  );
}
