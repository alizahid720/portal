import React from "react";

import { Img, Line, List, Text } from "components";

const ReservationCalendar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-start sm:px-5 px-8 py-4 w-full">
          <Text
            className="text-gray-400 text-xl w-auto"
            size="txtLatoSemiBold20"
          >
            {props?.startdate}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <Text
            className="text-gray-400 text-xl w-auto"
            size="txtLatoSemiBold20"
          >
            {props?.enddate}
          </Text>
        </div>
        <Line className="bg-gray-400 h-px w-full" />
        <List
          className="border border-black-900 border-solid sm:flex-col flex-row md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-center sm:ml-[0] p-1 w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-8 py-4 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft_black_900.svg"
                alt="arrowleft"
              />
              <Text
                className="flex-1 text-center text-gray-600 text-xl w-auto"
                size="txtLatoSemiBold20Gray600"
              >
                {props?.monthyear}
              </Text>
            </div>
            <Line className="bg-gray-400 h-px w-[85%]" />
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <div className="flex flex-row gap-[11px] items-center justify-center sm:px-5 px-8 py-2 w-full">
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.day}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayOne}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayTwo}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayThree}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayFour}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayFive}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.daySix}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-2.5 sm:gap-5 grid sm:grid-cols-1 grid-cols-7 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one1}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one2}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one3}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one4}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one5}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one6}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one7}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one8}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one9}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one10}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one11}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one12}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one13}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one14}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one15}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one16}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one17}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one18}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one19}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one20}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one21}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one22}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one23}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one24}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one25}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one26}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one27}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one28}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one29}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one30}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one31}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one32}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one33}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one34}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-center sm:ml-[0] p-1 w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-8 py-4 w-full">
              <Text
                className="flex-1 text-center text-gray-600 text-xl w-auto"
                size="txtLatoSemiBold20Gray600"
              >
                {props?.monthyear1}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft_black_900.svg"
                alt="arrowright"
              />
            </div>
            <Line className="bg-gray-400 h-px w-[85%]" />
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <div className="flex flex-row gap-[11px] items-center justify-center sm:px-5 px-8 py-2 w-full">
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.day1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayone1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.daytwo1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.daythree1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayfour1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.dayfive1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-2 py-0.5 w-full">
                  <Text
                    className="text-black-900 text-xs tracking-[0.36px] uppercase w-auto"
                    size="txtLatoMedium12"
                  >
                    {props?.daysix1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-2.5 sm:gap-5 grid sm:grid-cols-1 grid-cols-7 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one35}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one36}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one37}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one38}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one39}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one40}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one41}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one42}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one43}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one44}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one45}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one46}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one47}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one48}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one49}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one50}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one51}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one52}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one53}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one54}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one55}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one56}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one57}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one58}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one59}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one60}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one61}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one62}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one63}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one64}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one65}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one66}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one67}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one68}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col h-[42px] md:h-auto items-center justify-center p-2.5 w-full">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtLatoMedium18"
                    >
                      {props?.one69}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

ReservationCalendar.defaultProps = {
  startdate: "Check in date",
  enddate: "Check out date",
  monthyear: "Month year",
  day: "Day",
  dayOne: "Day",
  dayTwo: "Day",
  dayThree: "Day",
  dayFour: "Day",
  dayFive: "Day",
  daySix: "Day",
  one: "1",
  one1: "1",
  one2: "1",
  one3: "1",
  one4: "1",
  one5: "1",
  one6: "1",
  one7: "1",
  one8: "1",
  one9: "1",
  one10: "1",
  one11: "1",
  one12: "1",
  one13: "1",
  one14: "1",
  one15: "1",
  one16: "1",
  one17: "1",
  one18: "1",
  one19: "1",
  one20: "1",
  one21: "1",
  one22: "1",
  one23: "1",
  one24: "1",
  one25: "1",
  one26: "1",
  one27: "1",
  one28: "1",
  one29: "1",
  one30: "1",
  one31: "1",
  one32: "1",
  one33: "1",
  one34: "1",
  monthyear1: "Month year",
  day1: "Day",
  dayone1: "Day",
  daytwo1: "Day",
  daythree1: "Day",
  dayfour1: "Day",
  dayfive1: "Day",
  daysix1: "Day",
  one35: "1",
  one36: "1",
  one37: "1",
  one38: "1",
  one39: "1",
  one40: "1",
  one41: "1",
  one42: "1",
  one43: "1",
  one44: "1",
  one45: "1",
  one46: "1",
  one47: "1",
  one48: "1",
  one49: "1",
  one50: "1",
  one51: "1",
  one52: "1",
  one53: "1",
  one54: "1",
  one55: "1",
  one56: "1",
  one57: "1",
  one58: "1",
  one59: "1",
  one60: "1",
  one61: "1",
  one62: "1",
  one63: "1",
  one64: "1",
  one65: "1",
  one66: "1",
  one67: "1",
  one68: "1",
  one69: "1",
};

export default ReservationCalendar;
