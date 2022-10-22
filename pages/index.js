import Link from "next/link";
import Image from "next/image";
// import picc from '../public/images/rent1.jpg';
// import housepic from '../public/images/house1.jpg';
import { Flex, Box, Text, Button, color } from "@chakra-ui/react";
import { url, fetchApi} from '../utilities/fetchApi';



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
    <Box>
      <h1>Hello World</h1>
      <Banner
        purpose="RENT a house"
        title1="Rental Houses for"
        title2="Everyone"
        desc1="Explore Home Apartments Villas"
        desc2="and more"
        buttonText="Explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl = {"https://img.freepik.com/free-photo/gray-sofa-white-living-room_43614-796.jpg?w=740&t=st=1665109220~exp=1665109820~hmac=fbe3d46c08818235fc3759c57583009017b8df8a9ef1df4ec4595279acc6620e"}
      />
      <Flex flexWrap="wrap">
        {/* fetch the properties and map over them*/}
      </Flex>
      <Banner
        purpose="BUY a house"
        title1="Find what"
        title2="you really want!"
        desc1="Explore Home Apartments Villas"
        desc2="and more"
        buttonText="Explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl = {"https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=740&t=st=1665108549~exp=1665109149~hmac=2dcbe5a779b1dd857389561b7b3b370b17ed7de607adf02074304401651cf9d5"}        

      />
      {/* <Banner
      /> */}
      {/* <Banner 
        purpose={'For rent'}/> */}
    </Box>
  );
}
