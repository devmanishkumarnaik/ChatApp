import React from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';
import { BouncingSkeleton } from '../styles/StyledComponents';

const LayoutLoader = ()=>{
    return (
        <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
             <Skeleton variant='rectangular' height={"100vh"}/>
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
          <Stack spacing={"1rem"}>
          {Array.from({length: 10}).map((_, index)=>(
            <Skeleton key={index} variant='rounded' height={"3.9rem"}/>
          ))}
          </Stack>
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" }
            }}
          >
            <Skeleton variant='rectangular' height={"100vh"}/>
          </Grid>
        </Grid>
    )
};

const TypingLoader = ()=>{
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.1s",
          backgroundColor: "#ea7079"
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.2s",
          backgroundColor: "#ea7079"
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.4s",
          backgroundColor: "#ea7079"
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.6s",
          backgroundColor: "#ea7079"
        }}
      />
    </Stack>
  );
};

export {TypingLoader, LayoutLoader};