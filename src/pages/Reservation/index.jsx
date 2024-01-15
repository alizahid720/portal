import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  Text,
} from "components";
import ReservationCalendar from "components/ReservationCalendar";

const ReservationPage = () => {
  const tableData = React.useRef([
    { itemdetail: "Package Name", rowqty: "$250", amount: "$3,000.00" },
    { itemdetail: "Pizza ", rowqty: "$1,500.00", amount: "$1,500.00" },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("itemdetail", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[22px] text-[10px] text-gray-900"
            size="txtInterSemiBold10"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[291px] text-[8px] text-gray-700 tracking-[0.32px] uppercase"
            size="txtInterSemiBold8"
          >
            Item Detail
          </Text>
        ),
      }),
      tableColumnHelper.accessor("rowqty", {
        cell: (info) => (
          <div className="flex flex-row gap-[83px] items-start justify-center pr-3.5 py-3.5">
            <Text
              className="mt-1.5 text-[10px] text-gray-900"
              size="txtInterMedium10Gray900"
            >
              10
            </Text>
            <Text
              className="mr-[206px] mt-1.5 text-[10px] text-gray-900 text-right"
              size="txtInterMedium10Gray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-20 items-center justify-center min-w-[341px] md:pr-10 sm:pr-5 pr-[221px]">
            <Text
              className="text-[8px] text-gray-700 tracking-[0.32px] uppercase"
              size="txtInterSemiBold8"
            >
              Qty
            </Text>
            <Text
              className="text-[8px] text-gray-700 text-right tracking-[0.32px] uppercase"
              size="txtInterSemiBold8"
            >
              Rate
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[22px] text-[10px] text-gray-900 text-right"
            size="txtInterMedium10Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[50px] pl-[11px] text-[8px] text-gray-700 text-right tracking-[0.32px] uppercase"
            size="txtInterSemiBold8"
          >
            Amount
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-blue-50 flex flex-col font-lato items-center justify-end mx-auto pt-[52px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1103px] mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[45px] sm:h-auto object-cover w-[13%] md:w-full"
              src="images/img_alogofinalimpression.png"
              alt="alogofinalimpre"
            />
            <div className="md:flex-1 gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between md:mt-0 mt-[3px] w-[83%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[170px] text-base text-center w-full"
                shape="round"
              >
                Home
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[170px] text-base text-center w-full"
                shape="round"
              >
                Our Attractions
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[170px] text-base text-center w-full"
                shape="round"
              >
                Rates & Schedule
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[170px] text-base text-center w-full"
                shape="round"
              >
                Events
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[170px] outline outline-[0.5px] outline-indigo-900 text-base text-center w-full"
                shape="round"
                color="light_green_A700"
                variant="fill"
              >
                Book
              </Button>
            </div>
          </div>
          <div className="md:h-[1271px] h-[1402px] mt-[51px] md:px-5 relative w-[71%] md:w-full">
            <Img
              className="absolute bottom-[2%] h-[1220px] left-[0] object-cover"
              src="images/img_gradients.png"
              alt="gradients"
            />
            <div className="absolute flex flex-col gap-[35px] items-center justify-start right-[0] top-[7%] w-auto">
              <Text
                className="capitalize sm:text-[35px] md:text-[41px] text-[45px] text-indigo-900 w-auto"
                size="txtPassionOneBold45"
              >
                The party happens here!
              </Text>
              <Text
                className="text-base text-center text-indigo-900 w-auto"
                size="txtLatoRegular16"
              >
                Bring your event to life in 4 quick and easy steps!
              </Text>
            </div>
            <Img
              className="absolute h-[132px] left-[0] object-cover top-[0]"
              src="images/img_group.png"
              alt="group"
            />
            <div className="absolute flex flex-col gap-[22px] items-center justify-start right-[10%] top-[21%] w-auto">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtGilroySemiBold22"
                >
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    1.
                  </span>
                  <span className="text-indigo-900_00 font-lato text-left font-bold">
                    .
                  </span>
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    Choose type of event
                  </span>
                </Text>
                <Text
                  className="text-base text-indigo-900_99 w-auto"
                  size="txtLatoSemiBold16"
                >
                  Are you booking for a birthday or a group outing?
                </Text>
              </div>
              <div className="bg-white-A700 border border-light_blue-500 border-solid flex flex-row gap-14 items-center justify-end p-[5px] rounded-lg w-full">
                <Text
                  className="text-center text-indigo-900_99 text-sm"
                  size="txtLatoSemiBold14"
                >
                  Birthday
                </Text>
                <Text
                  className="bg-light_blue-500 h-11 justify-center mr-[9px] sm:px-5 px-[35px] py-[13px] rounded-lg text-center text-sm text-white-A700 w-[180px]"
                  size="txtLatoSemiBold14WhiteA700"
                >
                  Group
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[11%] w-auto">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtLatoBold22"
                >
                  Select the number of people
                </Text>
                <Text
                  className="text-base text-indigo-900_99 w-auto"
                  size="txtLatoSemiBold16"
                >
                  10 persons minimum
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[22px] h-[180px] md:h-auto items-start justify-start right-[6%] top-[38%] w-auto">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtGilroySemiBold22"
                >
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    2.
                  </span>
                  <span className="text-indigo-900_00 font-lato text-left font-bold">
                    .
                  </span>
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    Choose your package
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[416px] md:max-w-full text-base text-indigo-900_99"
                  size="txtLatoSemiBold16"
                >
                  Choose the package that suits your desires: from all-in-one
                  ready-to-use options to the event you build from A to Z,
                  according to your wishes.
                </Text>
              </div>
              <Input
                name="frame1707478628"
                placeholder="Choose your package"
                className="font-semibold p-0 placeholder:text-indigo-900_99 text-left text-sm w-full"
                wrapClassName="border border-light_blue-500 border-solid flex w-[89%]"
                suffix={
                  <Img
                    className="h-[22px] ml-[35px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                }
              ></Input>
            </div>
            <div className="absolute bg-light_blue-500 bottom-[10%] flex flex-col h-[477px] md:h-auto items-center justify-start outline outline-[1px] outline-indigo-900 p-[30px] sm:px-5 right-[13%] rounded-[26px] w-[336px]">
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[282px]">
                      <div className="flex flex-col font-passionone gap-[22px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-indigo-900_a2 tracking-[1.76px] uppercase w-auto"
                          size="txtPassionOneBold16"
                        >
                          <span className="text-indigo-900 font-passionone text-left font-bold">
                            S
                          </span>
                          <span className="text-indigo-900 font-passionone text-left font-bold">
                            porting and Cultural Groups
                          </span>
                        </Text>
                        <div className="flex flex-row font-lato gap-2 items-end justify-start w-auto">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                            size="txtLatoBlack32"
                          >
                            $25
                          </Text>
                          <Text
                            className="text-base text-indigo-900 w-auto"
                            size="txtLatoRegular16"
                          >
                            / person
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-indigo-900_99 text-sm w-auto"
                        size="txtLatoMedium14"
                      >
                        <span className="text-indigo-900_99 font-lato text-left font-medium">
                          -
                        </span>
                        <span className="text-indigo-900_00 font-lato text-left font-medium">
                          -
                        </span>
                        <span className="text-indigo-900_99 font-lato text-left font-medium">
                          Tax-exclusive.
                        </span>
                      </Text>
                      <Text
                        className="text-indigo-900_99 text-sm w-auto"
                        size="txtLatoMedium14"
                      >
                        <span className="text-indigo-900_99 font-lato text-left font-medium">
                          -
                        </span>
                        <span className="text-indigo-900_00 font-lato text-left font-medium">
                          -
                        </span>
                        <span className="text-indigo-900_99 font-lato text-left font-normal">
                          Minimum of 10 people
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-gray-50 h-px rounded-[1px] w-[98%]" />
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[140px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-5 items-start justify-start w-[276px] sm:w-full">
                    <CheckBox
                      className="font-medium text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="generaladmissio_One"
                      id="generaladmissio_One"
                      label="General Admission - Adrenaline Zone"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="1roundoflaser"
                      id="1roundoflaser"
                      label="1 round of Laser Tag Game"
                    ></CheckBox>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-12 leading-[normal] rounded-[7px] text-center text-sm w-[276px]"
                    size="md"
                    variant="fill"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center md:ml-[0] ml-[658px] mt-12 md:px-5 w-[8%] md:w-full">
            <Text
              className="text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
              size="txtPassionOneRegular22"
            >
              -
            </Text>
            <Button
              className="border border-indigo-900 border-solid cursor-pointer font-black font-lato min-w-[54px] ml-3.5 rounded-lg text-2xl md:text-[22px] text-center sm:text-xl"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              10
            </Button>
            <Text
              className="ml-[13px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
              size="txtPassionOneRegular22"
            >
              +
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[548px] mt-[78px] md:px-5 w-auto">
            <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
              <Text
                className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                size="txtGilroySemiBold22"
              >
                <span className="text-indigo-900 font-lato text-left font-bold">
                  4.
                </span>
                <span className="text-indigo-900_00 font-lato text-left font-bold">
                  .
                </span>
                <span className="text-indigo-900 font-lato text-left font-bold">
                  Add some more fun to the party!
                </span>
              </Text>
              <Text
                className="text-base text-indigo-900_99 w-auto"
                size="txtLatoSemiBold16"
              >
                You can add some addons to your packages.
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[419px] mt-[61px] md:px-5 w-[41%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start w-[14%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              <Img
                className="h-[62px]"
                src="images/img_television.svg"
                alt="television"
              />
            </div>
            <Img
              className="h-[62px] ml-44 sm:ml-[0]"
              src="images/img_television_blue_gray_900.svg"
              alt="television_One"
            />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start sm:ml-[0] ml-[165px] w-[14%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group6.svg')" }}
            >
              <Img
                className="h-[62px]"
                src="images/img_television_blue_gray_900_62x80.svg"
                alt="television_Two"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-passionone md:gap-5 items-start justify-center md:ml-[0] ml-[323px] mt-[11px] md:px-5 w-[54%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl w-auto"
                size="txtPassionOneBold22"
              >
                Fruit Platter
              </Text>
            </div>
            <Text
              className="leading-[130.00%] ml-2.5 md:ml-[0] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl w-[27%] sm:w-full"
              size="txtPassionOneBold22"
            >
              Juice or Soft Drink Pitcher (48 oz.)
            </Text>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[13px] md:mt-0 mt-3.5 w-auto">
              <Text
                className="text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl w-auto"
                size="txtPassionOneBold22"
              >
                Pizza (14 in.)
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-lato items-center justify-start md:ml-[0] ml-[373px] mt-[11px] md:px-5 w-[46%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row items-center justify-between w-[63%] sm:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                    size="txtLatoBlack32"
                  >
                    $12,99
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-auto"
                    size="txtLatoRegular16"
                  >
                    / each
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                    size="txtLatoBlack32"
                  >
                    $10,00
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-auto"
                    size="txtLatoRegular16"
                  >
                    / each
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-end justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                  size="txtLatoBlack32"
                >
                  $20,00
                </Text>
                <Text
                  className="text-base text-indigo-900 w-auto"
                  size="txtLatoRegular16"
                >
                  / each
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-passionone sm:gap-5 items-end justify-start mt-[17px] w-[88%] md:w-full">
              <Text
                className="sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                -
              </Text>
              <div className="bg-white-A700 border border-indigo-900 border-solid h-9 sm:ml-[0] ml-[9px] rounded-lg w-[6%]"></div>
              <Text
                className="ml-2 sm:ml-[0] sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                +
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                -
              </Text>
              <div className="bg-white-A700 border border-indigo-900 border-solid h-9 sm:ml-[0] ml-[9px] rounded-lg w-[6%]"></div>
              <Text
                className="ml-2 sm:ml-[0] sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                +
              </Text>
              <Text
                className="sm:ml-[0] ml-[172px] sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                -
              </Text>
              <div className="bg-white-A700 border border-indigo-900 border-solid h-9 sm:ml-[0] ml-[9px] rounded-lg w-[6%]"></div>
              <Text
                className="ml-2 sm:ml-[0] sm:mt-0 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                size="txtPassionOneRegular22"
              >
                +
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-[71px] w-[55%] md:w-full">
              <Img
                className="h-12"
                src="images/img_television_blue_gray_900_48x87.svg"
                alt="television_Three"
              />
              <Img
                className="h-12"
                src="images/img_television_48x87.svg"
                alt="television_Four"
              />
            </div>
            <div className="flex flex-col font-passionone items-center justify-start mt-[19px] w-[65%] md:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneBold22"
                >
                  Vegetable Platter
                </Text>
                <Text
                  className="text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneBold22"
                >
                  Popcorn Basket
                </Text>
              </div>
              <div className="flex flex-row font-lato items-center justify-between mt-[26px] w-[99%] md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                    size="txtLatoBlack32"
                  >
                    $12,99
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-auto"
                    size="txtLatoRegular16"
                  >
                    / each
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 tracking-[0.64px] w-auto"
                    size="txtLatoBlack32"
                  >
                    $6,00
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-auto"
                    size="txtLatoRegular16"
                  >
                    / each
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-passionone items-end justify-start mt-[17px] w-[81%] md:w-full">
                <Text
                  className="my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneRegular22"
                >
                  -
                </Text>
                <div className="bg-white-A700 border border-indigo-900 border-solid h-9 ml-[9px] rounded-lg w-[10%]"></div>
                <Text
                  className="ml-2 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneRegular22"
                >
                  +
                </Text>
                <Text
                  className="ml-[196px] my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneRegular22"
                >
                  -
                </Text>
                <div className="bg-white-A700 border border-indigo-900 border-solid h-9 ml-[9px] rounded-lg w-[10%]"></div>
                <Text
                  className="ml-2 my-[5px] text-[22px] text-center text-indigo-900 sm:text-lg md:text-xl"
                  size="txtPassionOneRegular22"
                >
                  +
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-lato md:gap-10 gap-[68px] justify-start max-w-[886px] mt-[92px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[306px] w-[368px]">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtGilroySemiBold22"
                >
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    5.
                  </span>
                  <span className="text-indigo-900_00 font-lato text-left font-bold">
                    .
                  </span>
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    Select a date and time
                  </span>
                </Text>
                <Text
                  className="text-base text-indigo-900_99 w-auto"
                  size="txtLatoSemiBold16"
                >
                  See the availibites in the calendar
                </Text>
              </div>
            </div>
            <ReservationCalendar className="bg-white-A700 flex flex-col gap-4 items-center justify-start px-4 py-2 rounded-[16px] w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[543px] mt-[99px] md:px-5 w-auto">
            <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
              <Text
                className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                size="txtGilroySemiBold22"
              >
                <span className="text-indigo-900 font-lato text-left font-bold">
                  5.
                </span>
                <span className="text-indigo-900_00 font-lato text-left font-bold">
                  .
                </span>
                <span className="text-indigo-900 font-lato text-left font-bold">
                  Billing information
                </span>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-indigo-900_99"
                size="txtLatoSemiBold16"
              >
                You can make a deposit and pay the balance the day of the
                reservation or pay in full right now
              </Text>
            </div>
          </div>
          <div className="flex flex-col justify-start md:ml-[0] ml-[347px] mt-[60px] md:px-5 w-[52%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-full">
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-full">
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
              <div className="bg-white-A700 h-9 w-[32%]"></div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[196px] mt-[66px] w-auto">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtGilroySemiBold22"
                >
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    5.
                  </span>
                  <span className="text-indigo-900_00 font-lato text-left font-bold">
                    .
                  </span>
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    Payment Method
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-indigo-900_99"
                  size="txtLatoSemiBold16"
                >
                  Pay right now to confirm the reservation , you will receive a
                  confirmation by email
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-center ml-36 md:ml-[0] mt-[45px] w-[65%] md:w-full">
              <div className="bg-white-A700 h-9 w-1/2"></div>
              <div className="bg-white-A700 h-9 w-1/2"></div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-center ml-36 md:ml-[0] mt-[17px] w-[65%] md:w-full">
              <div className="bg-white-A700 h-9 w-1/2"></div>
              <div className="bg-white-A700 h-9 w-1/2"></div>
            </div>
            <div className="flex flex-col font-lato gap-[22px] items-start justify-start md:ml-[0] ml-[196px] mt-[61px] w-auto">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                <Text
                  className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                  size="txtGilroySemiBold22"
                >
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    5.
                  </span>
                  <span className="text-indigo-900_00 font-lato text-left font-bold">
                    .
                  </span>
                  <span className="text-indigo-900 font-lato text-left font-bold">
                    Payment
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-indigo-900_99"
                  size="txtLatoSemiBold16"
                >
                  You can make a deposit and pay the balance the day of the
                  reservation or pay in full right now
                </Text>
              </div>
              <div className="bg-white-A700 border border-light_blue-500 border-solid flex flex-row gap-[58px] items-center justify-end p-[5px] rounded-lg w-full">
                <Text
                  className="text-center text-indigo-900_99 text-sm"
                  size="txtLatoSemiBold14"
                >
                  Deposit
                </Text>
                <Text
                  className="bg-light_blue-500 h-11 justify-center mr-[9px] sm:px-5 px-[35px] py-[13px] rounded-lg text-center text-sm text-white-A700 w-[180px]"
                  size="txtLatoSemiBold14WhiteA700"
                >
                  Pay in full
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-lato sm:gap-10 items-center justify-between md:ml-[0] ml-[17px] mt-[98px] w-[94%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-900"
                size="txtLatoBlack48"
              >
                DUE TODAY
              </Text>
              <div className="font-inter md:h-[59px] h-[63px] relative w-[19%] sm:w-full">
                <Text
                  className="absolute right-[0] text-[10px] text-gray-700 text-right top-[0]"
                  size="txtInterMedium10"
                >
                  CAD)
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-indigo-900 text-right w-max"
                  size="txtInterBold48"
                >
                  $300
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[679px] mt-0.5 text-[10px] text-gray-700 text-right"
              size="txtInterMedium10"
            >
              CAD)
            </Text>
            <div className="flex flex-row font-inter items-start justify-between md:ml-[0] ml-[23px] mt-6 w-[41%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-[10px] text-gray-700 w-auto"
                  size="txtInterMedium10"
                >
                  Billed to
                </Text>
                <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                  <Text
                    className="text-[10px] text-gray-900 w-auto"
                    size="txtInterSemiBold10"
                  >
                    Company Name
                  </Text>
                  <Text
                    className="leading-[14.00px] text-[10px] text-gray-700"
                    size="txtInterRegular10"
                  >
                    <>
                      Company address
                      <br />
                      City, Country - 00000
                    </>
                  </Text>
                  <Text
                    className="text-[10px] text-gray-700 w-auto"
                    size="txtInterRegular10"
                  >
                    +0 (000) 123-4567
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-1/4">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-[10px] text-gray-700 w-auto"
                    size="txtInterMedium10"
                  >
                    Invoice number
                  </Text>
                  <Text
                    className="text-[10px] text-gray-900 w-auto"
                    size="txtInterSemiBold10"
                  >
                    #AB2324-01
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-[10px] text-gray-700 w-auto"
                    size="txtInterMedium10"
                  >
                    Reference
                  </Text>
                  <Text
                    className="text-[10px] text-gray-900 w-auto"
                    size="txtInterSemiBold10"
                  >
                    INV-057
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start md:ml-[0] ml-[23px] mt-6 w-[93%] md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-[10px] text-gray-700 w-auto"
                  size="txtInterMedium10"
                >
                  Subject{" "}
                </Text>
                <Text
                  className="text-[10px] text-gray-900 w-auto"
                  size="txtInterSemiBold10"
                >
                  Design System
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start md:ml-[0] ml-[155px] w-auto">
                <Text
                  className="text-[10px] text-gray-700 w-auto"
                  size="txtInterMedium10"
                >
                  Invoice date
                </Text>
                <Text
                  className="text-[10px] text-gray-900 w-auto"
                  size="txtInterSemiBold10"
                >
                  01 Aug, 2023
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-end justify-start md:ml-[0] ml-[279px] w-auto">
                <Text
                  className="text-[10px] text-gray-700 text-right w-auto"
                  size="txtInterMedium10"
                >
                  Date of the reservation
                </Text>
                <Text
                  className="text-[10px] text-gray-900 text-right w-auto"
                  size="txtInterSemiBold10"
                >
                  15 Aug, 2023
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-1 items-end justify-start md:ml-[0] ml-[635px] mt-[23px] w-auto">
              <Text
                className="text-[10px] text-gray-700 text-right w-auto"
                size="txtInterMedium10"
              >
                Time
              </Text>
              <Text
                className="text-[10px] text-gray-900 text-right w-auto"
                size="txtInterSemiBold10"
              >
                10AM to 14PM
              </Text>
            </div>
            <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[23px] mr-[184px] mt-[42px] w-[72%]" />
            <div className="overflow-auto font-inter md:ml-[0] ml-[23px] w-[93%]">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[23px] mr-[184px] mt-[27px] w-[72%]" />
            <Text
              className="md:ml-[0] ml-[23px] text-[10px] text-gray-700"
              size="txtInterRegular10"
            >
              Birthday{" "}
            </Text>
            <Text
              className="md:ml-[0] ml-[23px] mt-7 text-[10px] text-gray-700"
              size="txtInterRegular10"
            >
              Addons
            </Text>
            <Line className="bg-blue_gray-100 h-px md:ml-[0] ml-[23px] mr-[184px] mt-3 w-[72%]" />
            <div className="flex flex-row font-inter items-center justify-between md:ml-[0] ml-[314px] mt-3 w-[53%] md:w-full">
              <Text
                className="text-[10px] text-gray-900"
                size="txtInterMedium10Gray900"
              >
                Subtotal
              </Text>
              <Text
                className="text-[10px] text-gray-900 text-right"
                size="txtInterMedium10Gray900"
              >
                $4,500.00
              </Text>
            </div>
            <div className="flex flex-row font-inter items-center justify-between md:ml-[0] ml-[314px] mt-3 w-[53%] md:w-full">
              <Text
                className="text-[10px] text-gray-900"
                size="txtInterMedium10Gray900"
              >
                GST (5%)
              </Text>
              <Text
                className="text-[10px] text-gray-900 text-right"
                size="txtInterMedium10Gray900"
              >
                $5.00
              </Text>
            </div>
            <div className="flex flex-row font-inter gap-[123px] items-start justify-end md:ml-[0] ml-[313px] mt-1 w-[54%] md:w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start w-[62%]">
                <Text
                  className="text-[10px] text-gray-900"
                  size="txtInterMedium10Gray900"
                >
                  QST (9.975%)
                </Text>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <Text
                className="text-[10px] text-gray-900 text-right"
                size="txtInterMedium10Gray900"
              >
                $9.00
              </Text>
            </div>
            <div className="flex flex-row font-inter items-center justify-between md:ml-[0] ml-[313px] mt-3 w-[53%] md:w-full">
              <Text className="text-[10px] text-gray-900" size="txtInterBold10">
                Total
              </Text>
              <Text
                className="text-[10px] text-gray-900 text-right"
                size="txtInterBold10"
              >
                300$
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold font-lato leading-[normal] min-w-[180px] ml-72 md:ml-[0] mr-[270px] mt-[104px] rounded-lg text-base text-center"
              color="light_blue_500"
              variant="fill"
            >
              Make reservation
            </Button>
          </div>
          <Img
            className="h-[309px] md:h-auto md:ml-[0] ml-[1098px] mt-[614px] object-cover"
            src="images/img_ellipse34.png"
            alt="ellipseThirtyFour"
          />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
