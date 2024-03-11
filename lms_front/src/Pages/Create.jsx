import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import "./Create.css";
import { Footer } from "./Footer";
import { useState } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { postData } from "../Redux/Api";
export const Create = () => {
  const dispatch = useDispatch();
  const [newuser, setNewUser] = useState({
    course: "",
    price: "",
    level: "",
    duration: "",
    instructor: "",
    rating: "",
  });
  const handlSub = async (e) => {
    e.preventDefault();

    dispatch(postData(newuser));
    alert("posted");
    setNewUser({
      course: "",
      price: "",
      level: "",
    });
  };
  return (
    <Box>
      <Box className="FormBox" border={"1px solid"}>
        <form onSubmit={handlSub}>
          <Stack spacing={3}>
            <FormControl id="course" isRequired>
              <FormLabel>course</FormLabel>
              <Input
                type="text"
                name="course"
                value={newuser.course}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="price" isRequired>
              <FormLabel>price</FormLabel>
              <Input
                type="number"
                name="price"
                value={newuser.price}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="level" isRequired>
              <FormLabel>level</FormLabel>
              <Input
                type="text"
                name="level"
                value={newuser.level}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="duration" isRequired>
              <FormLabel>duration</FormLabel>
              <Input
                type="number"
                name="duration"
                value={newuser.duration}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="instructor" isRequired>
              <FormLabel>instructor</FormLabel>
              <Input
                type="text"
                name="instructor"
                value={newuser.instructor}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="rating" isRequired>
              <FormLabel>rating</FormLabel>
              <Input
                type="number"
                name="rating"
                value={newuser.rating}
                onChange={(e) =>
                  setNewUser({ ...newuser, [e.target.name]: e.target.value })
                }
              />
            </FormControl>




            <Button colorScheme="green" w={"200px"} m={"auto"} type="submit">
              Post
            </Button>
          </Stack>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};
