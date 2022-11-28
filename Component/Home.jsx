import React from "react";
import CartShop from "./CartShop";
import data from "../Data/data";
import { list1, list2 } from "../Data/dataMain";
import Cart from "./Cart";
import styles from "../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid xs={10} item ml={{ xs: "21.5%", lg: "17%" }} mb={10}>
      <Grid item container className={styles.rightSide_TopBox}>
        <Typography variant="h2">{"Good afternoon"}</Typography>
        <Grid item className={styles.rightSide_TopBox__cart}>
          {data.map((item) => (
            <Cart key={item.id} image1={item.image} title={item.title} />
          ))}
        </Grid>
        <Grid p={3}mt={2} item color={"#fff"}>
          <Typography variant="h2">ًRecently Played</Typography>
        </Grid>
        
      <Grid pl={3} mr={10} item display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} >
        {list1.map((item) => (
            <CartShop key={item.id} image={item.image} title={item.title} dis={item.dis} />
          ))}
        </Grid>
        <Typography variant="h2">{"Just the Hits"}</Typography>
        <Grid pl={3} mr={10} mb={5} item display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} >
          {list2.map((item) => (
            <CartShop key={item.id} image={item.image} title={item.title} dis={item.dis} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
