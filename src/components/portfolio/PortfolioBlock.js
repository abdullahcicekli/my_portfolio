import React from "react";
import IconLink from "./IconLink";
import Crew from "./crew";
import { Chip, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";


function PortfolioBlock(props) {
  const theme = useTheme();
  const { image, live, source, title, desc, tech, crew } = props;
  if (source == null) {
    return (
      <Box
        style={{ marginTop: "2rem" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component={"img"} src={image} alt={"mockup"} />
        <h1 style={{ fontSize: "2rem" }}>{title}</h1>
        <p style={{ marginTop: "1.5rem" }}>{desc}</p>
        {/* <Box  component={"ul"} style={{display:"flex", padding: 0}} >
            {tech.map((tech, index) => (
               <Box
               key={index}
               component={"li"}
               style={{marginRight:"1rem", marginTop:"2rem", flex: "auto"}}
               >
               <Chip
                  avatar={<Avatar alt="Natacha" src={tech.logo} />}
                  size="small"
                  label={tech.name}
               />
               </Box>
            ))}
        </Box> */}


        <Box
          p={1}
          border={"2px solid black"}
          borderRadius={"10px"}
          style={{ marginTop: "2rem" }}
        >
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component={"img"} src={image} alt={"mockup"} />
        <h1 style={{ fontSize: "2rem" }}>{title}</h1>
        <p>{desc}</p>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems={"center"}
          fontSize={"1.5rem"}
          py={"2rem"}
        >
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
          </Box>
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default PortfolioBlock;
