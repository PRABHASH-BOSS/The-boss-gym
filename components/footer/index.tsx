import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <Flex
        css={{
          py: "$17",
          px: "$6",
        }}
      >
        <Box as={"footer"} css={{ width: "100%" }}>
          {/* align center */}
          <Text h3 css={{ textAlign: "center", paddingLeft: "2%" }}>
            Follow Us
          </Text>
          <Flex
            justify={"center"}
            align={"center"}
            css={{
              pt: "$5",
              gap: "$10",
              "&  ul": {
                margin: 0,
              },
              "@sm": {},
            }}
          >
            <Flex css={{ gap: "$5" }} direction={"row"} align={"center"}>
            <Box
                css={{
                  alignContent: "center",
                }}
              >
              <AcmeLogo />
              </Box>
              <Box
                css={{
                  gap: "$5",
                  listStyle: "none",
                  width: "1.25rem",
                  alignContent: "center",
                  marginLeft: "1rem",
                }}
              >
                {/* Instagram */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/the_boss_gym_/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="34px"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fd5" />
                      <stop offset=".328" stop-color="#ff543f" />
                      <stop offset=".348" stop-color="#fc5245" />
                      <stop offset=".504" stop-color="#e64771" />
                      <stop offset=".643" stop-color="#d53e91" />
                      <stop offset=".761" stop-color="#cc39a4" />
                      <stop offset=".841" stop-color="#c837ab" />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4168c9" />
                      <stop
                        offset=".999"
                        stop-color="#4168c9"
                        stop-opacity="0"
                      />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    />
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    />
                  </svg>
                </a>
              </Box>
              <Box
                css={{
                  gap: "$5",
                  listStyle: "none",
                  width: "1.25rem",
                  alignContent: "center",
                  marginLeft: "2rem",
                }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/prabhash.boss.7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="35px"
                  >
                    <linearGradient
                      id="awSgIinfw5_FS5MLHI~A9a"
                      x1="6.228"
                      x2="42.077"
                      y1="4.896"
                      y2="43.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#0d61a9" />
                      <stop offset="1" stop-color="#16528c" />
                    </linearGradient>
                    <path
                      fill="url(#awSgIinfw5_FS5MLHI~A9a)"
                      d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                    />
                    <path
                      d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                      opacity=".05"
                    />
                    <path
                      d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                      opacity=".07"
                    />
                    <path
                      fill="#fff"
                      d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                    />
                  </svg>
                </a>
              </Box>
            </Flex>
          </Flex>
          <Box
            css={{
              px: "$10",
              "@md": {
                px: "$56",
              },
            }}
          >
            <Divider
              css={{
                mt: "$14",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <Flex
              //   justify={'between'}
              align={"center"}
              wrap={"wrap"}
              css={{
                pt: "$8",
                gap: "$10",
                justifyContent: "center",
                "@md": {
                  justifyContent: "space-between",
                },
              }}
            >
              <Flex
                css={{
                  gap: "$6",
                }}
              >
                <Text span css={{ color: "$accents8" }}>
                  © The Boss Gym. All rights reserved.
                </Text>
              </Flex>
              <Flex
                css={{
                  gap: "$2",
                }}
              >
                <Text span css={{ color: "$accents8" }}>
                  Site by
                </Text>
                <a href="https://www.akilesh.in/" target="_blank" style={{color: "orange"}} >
                  akilesh_io
                </a>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
