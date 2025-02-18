import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";
import checkpic from "/check.png";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={transformImage(user?.avatar?.url)}
        sx={{
          width: 170,
          height: 170,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      {/* <Profilecard heading={"Bio"} text={user?.bio} /> */}
      <Profilecard
        heading="Username"
        text={
          <>
            {user?.username}
            {user?.username === "Manish" && (
              <img
                style={{ height: "14px", marginLeft: "3px" }}
                src={checkpic}
                alt="logo"
              />
            )}
          </>
        }
        Icon={<UserNameIcon />}
      />
      <Profilecard
        heading={"Name"}
        text={user?.name}
        Icon={<FaceIcon />}
      />
      <Profilecard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const Profilecard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
