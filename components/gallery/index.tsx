import { Container, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";
import PhotoGallery from "./PhotoGallery";
import TransGallery from "./trans";
import { Insta } from "./insta";
import Image from "next/image";

import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import d from "../../public/d.jpeg";

export const Gallery = () => {
  return (
    <>
      <Flex
        id="gallery"
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center", color: "$yellow600" }}>
          Interior
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          In our gallery you can see some of the equipment we have in our gym.
        </Text>
      </Flex>

      <Container
        css={{
          pt: "$15",
          px: "$6",
          "@lg": {
            px: "$64",
          },
        }}
      >
        <PhotoGallery />
      </Container>

      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text
          id="trainers"
          h2
          css={{ textAlign: "center", color: "$yellow600" }}
        >
          Our Trainers
        </Text>
        <Grid.Container
          gap={4}
          alignItems="center"
          justify="center"          
          css={{
            width: "100%",
            "@sm": {
              width: "100%",
            },
            "&  span": {
              whiteSpace: "pre",
            },
          }}
        >
          <Grid justify="center">
            <Flex align={"center"} justify={"center"}>
              <AcmeLogo />
              <Text weight={"semibold"} span size={"$lg"}>
                Master
              </Text>
            </Flex>
            <Image src={a} width={200} height={150} alt="Master" />{" "}
          </Grid>
          <Grid justify="center">
            <Flex align={"center"} justify={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer
              </Text>
            </Flex>
            <Image src={b} width={200} height={150} alt="Master" />{" "}

          </Grid>
          <Grid justify="center">
            <Flex align={"center"} justify={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer
              </Text>
            </Flex>
            <Image src={c} width={200} height={150} alt="Master" />{" "}

          </Grid>
          <Grid justify="center">
            <Flex align={"center"} justify={"center"}>
              <AcmeLogo />{" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trainer
              </Text>
            </Flex>
            <Image src={d} width={200} height={150} alt="Master" />{" "}
          </Grid>
        </Grid.Container>
      </Flex>

      <div
        style={{
          margin: "8px",
          maxWidth: "700px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Insta />
      </div>

      <Flex
        id="gallery"
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center", color: "$yellow600" }}>
          Transformations
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          People who have transformed their bodies with us.
        </Text>
      </Flex>

      <Container
        css={{
          pt: "$15",
          px: "$6",
          "@lg": {
            px: "$64",
          },
        }}
      >
        <TransGallery />
      </Container>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
