import {
  Box,
  Button,
  Text,
  Heading,
  Flex,

  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Input,
  FormControl,
} from "@chakra-ui/react";
import "./Home.css";
import { FaFilter, FaSort } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteData, getPublicData, updateValue } from "../Redux/Api";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { HamburgerIcon } from "@chakra-ui/icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Footer } from "./Footer";
import Modal from "react-modal";

export const Home = () => {
  // https://lms-front-kappa.vercel.app/

  const dispatch = useDispatch();
  const { Data, total } = useSelector((store) => store);
  console.log(Data)

  // const [PersonalData, setPersonalData] = useState([
  //   {
  //     course: "React.js Essentials",
  //     price: 29.99,
  //     level: "Intermediate",
  //     duration: "6 weeks",
  //     instructor: "Rachel Rodriguez",
  //     rating: 4.6,
  //   },
  //   {
  //     course: "SQL Mastery: Database Design and Querying",
  //     price: 34.99,
  //     level: "Intermediate",
  //     duration: "8 weeks",
  //     instructor: "David Martinez",
  //     rating: 4.8,
  //   },
  //   {
  //     course: "Data Structures and Algorithms in Python",
  //     price: 39.99,
  //     level: "Advanced",
  //     duration: "10 weeks",
  //     instructor: "Dr. Jennifer White",
  //     rating: 4.9,
  //   },
  //   {
  //     course: "Angular: The Complete Guide",
  //     price: 37.99,
  //     level: "Advanced",
  //     duration: "12 weeks",
  //     instructor: "Brian Thompson",
  //     rating: 4.7,
  //   },
  //   {
  //     course: "Machine Learning with Python",
  //     price: 49.99,
  //     level: "Advanced",
  //     duration: "10 weeks",
  //     instructor: "Dr. Kevin Johnson",
  //     rating: 4.9,
  //   },
  //   {
  //     course: "iOS App Development: From Scratch to Store",
  //     price: 44.99,
  //     level: "Advanced",
  //     duration: "12 weeks",
  //     instructor: "Emma Lewis",
  //     rating: 4.8,
  //   },
  //   {
  //     course: "Advanced Java Programming: Design Patterns",
  //     price: 36.99,
  //     level: "Advanced",
  //     duration: "8 weeks",
  //     instructor: "Daniel Brown",
  //     rating: 4.6,
  //   },
  //   {
  //     course: "Node.js: Building Scalable Applications",
  //     price: 32.99,
  //     level: "Intermediate",
  //     duration: "8 weeks",
  //     instructor: "Alex Turner",
  //     rating: 4.7,
  //   },
  //   {
  //     course: "Full Stack Web Development Bootcamp",
  //     price: 49.99,
  //     level: "Advanced",
  //     duration: "12 weeks",
  //     instructor: "Sarah Adams",
  //     rating: 4.8,
  //   },
  //   {
  //     course: "Python for Data Science and Machine Learning",
  //     price: 44.99,
  //     level: "Intermediate",
  //     duration: "10 weeks",
  //     instructor: "Dr. Michael Clark",
  //     rating: 4.7,
  //   },
  //   {
  //     course: "Python Programming Masterclass",
  //     price: 29.99,
  //     level: "Intermediate",
  //     duration: "8 weeks",
  //     instructor: "Dr. John Smith",
  //     rating: 4.7,
  //   },
  //   {
  //     course: "Java Fundamentals: The Core Concepts",
  //     price: 24.99,
  //     level: "Beginner",
  //     duration: "6 weeks",
  //     instructor: "Prof. Emily Johnson",
  //     rating: 4.5,
  //   },
  //   {
  //     course: "JavaScript Basics: From Novice to Ninja",
  //     price: 34.99,
  //     level: "Intermediate",
  //     duration: "10 weeks",
  //     instructor: "Jason Lee",
  //     rating: 4.9,
  //   },
  //   {
  //     course: "C++ Programming for Beginners",
  //     price: 27.99,
  //     level: "Beginner",
  //     duration: "8 weeks",
  //     instructor: "Dr. Amanda Brown",
  //     rating: 4.6,
  //   },
  //   {
  //     course: "Ruby on Rails: The Complete Guide",
  //     price: 39.99,
  //     level: "Advanced",
  //     duration: "12 weeks",
  //     instructor: "Alex Turner",
  //     rating: 4.8,
  //   },
  //   {
  //     course: "HTML & CSS Crash Course",
  //     price: 20.0,
  //     level: "Beginner",
  //     duration: "4 weeks",
  //     instructor: "Sarah Adams",
  //     rating: 4.3,
  //   },
  //   {
  //     course: "Swift Programming: From Zero to Hero",
  //     price: 29.99,
  //     level: "Intermediate",
  //     duration: "8 weeks",
  //     instructor: "Dr. Michael Clark",
  //     rating: 4.7,
  //   },
  //   {
  //     course: "PHP Development Bootcamp",
  //     price: 22.99,
  //     level: "Intermediate",
  //     duration: "6 weeks",
  //     instructor: "Mark Thompson",
  //     rating: 4.4,
  //   },
  // ]);
  const [id, setId] = useState("");
  const [updateVal, setUpdateVal] = useState({
   course: "",
    price: "",
    level: "",
    duration: "",
    instructor: "",
    rating: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("yues");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState("");
  const [order, setOrder] = useState("");
  const [pageNo, setPageNo] = useState(1);
 

  const handleValue = (val) => {
    switch (val) {
      case "MREN":
        return setValue("MREN");
      case "React":
        return setValue("React");
      case "DSA":
        return setValue("DSA");
      case "JavaScript":
        return setValue("JavaScript");
      default:
        throw new Error("invalid");
    }
  };

  const handleOrder = (value) => {
    switch (value) {
      case "asc":
        return setOrder("asc");
      case "desc":
        return setOrder("desc");
      default:
        throw new Error("invalid");
    }
  };

  const handlePage = (Num) => {
    setPageNo(pageNo + Num);
  };

  useEffect(() => {
    dispatch(getPublicData(pageNo, value, order));
  }, [id, updateVal, value, order, pageNo]);

  const handleDel = (_id) => {
    console.log(_id);
    dispatch(deleteData(_id));
  };

  const handleUpdate = (id) => {
    setId(id);
  };

  const handleUpd = () => {
    console.log(updateVal);
    dispatch(updateValue(id, updateVal));
    closeModal();
  };

  // const nextBtn = Math.ceil(total / 3);

  return (
    <Box>
      <Modal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Modal"
      >
        {/* Your modal content goes here */}
        <Box className="modal-edit">
          <Heading className="editBlog">Edit Blog</Heading>
          <FormControl>
            <Input
              type="text"
              placeholder="title"
              name="title"
              value={updateVal.title}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="category"
              name="category"
              value={updateVal.category}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="description"
              name="description"
              value={updateVal.description}
              onChange={(e) =>
                setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
              }
            />
          </FormControl>
          <Flex className="modalbtn">
            <Button onClick={closeModal}>Close</Button>
            <Button onClick={() => handleUpd()}>Save</Button>
          </Flex>
        </Box>
      </Modal>
      <Heading className="myBlog">Courses</Heading>
      <Flex className="funBlog">
        <Box className="funBlog1">
          <Box className="filterBlog1">
            <Flex alignItems="center">
              <span marginRight="5px">Filter by</span>
              <FaFilter size={15} style={{ marginLeft: "10px" }} />
            </Flex>
          </Box>
          <Box className="allFunBtn1">
            <Button
              className="btn"
              value={"MERN"}
              colorScheme="teal"
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              MERN
            </Button>
            <Button
              colorScheme="teal"
              value={"React"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              React
            </Button>
            <Button
              colorScheme="teal"
              value={"DSA"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              DSA
            </Button>
            <Button
              colorScheme="teal"
              value={"Javascript"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleValue(e.target.value)}
            >
              Javasript
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box className="funBlog2">
          <Box className="filterBlog2">
            <Flex alignItems={"center"}>
              <span>Sort by</span>
              <FaSort size={20} style={{ marginLeft: "10px" }} />
            </Flex>
          </Box>
          <Box className="allFunBtn2">
            <Button
              colorScheme="teal"
              value={"desc"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleOrder(e.target.value)}
            >
              High
            </Button>
            <Button
              colorScheme="teal"
              value={"asc"}
              variant="outline"
              color={"white"}
              onClick={(e) => handleOrder(e.target.value)}
            >
              Low
            </Button>
          </Box>
        </Box>
      </Flex>

      <Box className="course-container">
        {Data?.map(({ course, level, _id, time, price, duration }) => (
          <Box className="main-container">
            <Box className="first-container">
              <Box>
                <Box className="title">Topic:- {course}</Box>
                <Box className="seconde-container">
                  <Text className="duration">duration:-{duration}</Text>
                  <Text className="price">Rs: {price}</Text>
                </Box>
              </Box>
            </Box>
            <Box className="button-container">
              <Button>Add to bookmark</Button>
              <Button>Buy</Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className="pagination">
        <Button
          isDisabled={pageNo === 1}
          colorScheme="teal"
          variant="solid"
          onClick={() => handlePage(-1)}
        >
          prev
        </Button>
        <Flex
          borderRadius="md"
          bg="white"
          color="black"
          px={5}
          h={10}
          justify="center"
          align="center"
        >
          {pageNo}
        </Flex>

        <Button
          // isDisabled={pageNo === nextBtn}
          colorScheme="teal"
          variant="solid"
          onClick={() => handlePage(1)}
        >
          next
        </Button>
      </Box>

    

      <Footer />
    </Box>
  );
};
/*
 <Spacer />
                    <Menu>
                      <MenuButton as={Box} cursor="pointer">
                        <Icon as={HamburgerIcon} boxSize={6} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            openModal();
                            handleUpdate(_id);
                          }}
                        >
                          Edit
                        </MenuItem>

                        <MenuItem onClick={() => handleDel(_id)}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
*/
