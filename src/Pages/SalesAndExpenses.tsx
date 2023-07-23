// import React, { useState } from "react";
import { Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Divider } from "@mui/material";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import HelpIcon from "@mui/icons-material/Help";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// const today = dayjs();
// const tomorrow = dayjs().add(1, "day");
const SalesAndExpenses = () => {
  const data = [
    {
      name: "Feb \n 2016",
      y: "12k",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mar \n 2016",
      y: "12k",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Apr \n 2016",
      y: "12k",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "May \n 2016",
      y: "12k",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jun \n 2016",
      y: "12k",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jul \n 2016",
      y: "12k",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Aug \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jan \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Feb \n 2016",
      y: "12k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto">
      {/* section 1 */}
      <div className="flex justify-around my-10">
        {/* left side */}
        <div className="flex gap-[5px]">
          <Typography variant="h6" component="h6">
            Total Receivables
          </Typography>
          <div className="" style={{ borderRadius: "50%", width: "full" }}>
            <HelpIcon />
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-[5px] justify-center items-center">
          <div>
            <p className="text-sm font-bold text-slate-500">
              Data refreshed at jul 18,2023 04:06 PM
            </p>
          </div>
          <div className="h-full border-r border-gray-500 mx-2"></div>
          <div>
            <LoopIcon />
          </div>
          <div
            className="flex gap-[5px] border border-indigo-600 px-5 text-sm justify-center items-center"
            style={{ borderRadius: "5px" }}
          >
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker", "DateTimePicker", "DateRangePicker"]}
              >
                <DemoItem label="">
                  <DatePicker
                    defaultValue={today}
                    minDate={tomorrow}
                    views={["year", "month", "day"]}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider> */}

            <p className="text-indigo-600">Today</p>
            <p className="text-indigo-600">Jul 20</p>
            <p className="text-indigo-600 text-sm">
              <CalendarTodayIcon />
            </p>
          </div>

          <div
            className="flex gap-[5px] border border-indigo-600 px-5 "
            style={{ borderRadius: "5px" }}
          >
            <p className="text-indigo-600 text-sm">
              <FileDownloadIcon />
            </p>
          </div>
          <div
            className="flex gap-[5px] border border-gray-600 px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-gray-600 text-sm">
              <ShareIcon />
            </p>
            <p className="text-gray-600 text-sm">Email</p>
          </div>
          <div
            className="flex gap-[5px] border border-gray-600 px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-gray-600 text-sm">
              <PrintIcon />
            </p>
            <p className="text-gray-600 text-sm">Print</p>
          </div>
          <div
            className="flex gap-[5px] bg bg-indigo-600 text-white px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600  text-sm">
              <SignalCellularAltIcon />
            </p>
            <p className="text-white-600 text-sm">Generate Report</p>
          </div>
          <div
            className="flex gap-[5px] bg bg-green-600 text-white py-[3px] px-[10px]"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600 text-sm">Save</p>
          </div>
          <div
            className="flex gap-[5px] bg bg-green-600 text-white py-[1px] px-[10px]"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600 text-sm">
              <ArrowDropDownIcon />
            </p>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="border border-gray-300 m-[20px] ">
        <div className="m-[5px] ">
          <p className="text-sm font-bold text-gray-500 py-[10px] px-[5px] ml-[5px]">
            Total Recevables $2,063.400
          </p>

          <div className="flex flex-wrap  mb-5 ml-[10px]" id="color-row">
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="w-[80px] h-[15px]"
                style={{ backgroundColor: getRandomColor() }}
              ></div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex justify-around justify-center items-center gap-5 h-[100px]">
          <div>
            <p className="text-lg text-cyan-600 font-bold">CURRENT</p>
            <p className="text-xl text-black-500 font-bold">$83.400</p>
          </div>

          <Divider orientation="vertical" flexItem />
          <div>
            <p className="text-xl text-orange-500 font-bold">OVERDUE</p>
            <p className="text-xl text-black-500 font-bold">$300.000</p>
            <p className="text-sm text-gray-500">1-15days</p>
          </div>
          <div>
            <p className="text-xl text-black-500 font-bold">$740.000</p>
            <p className="text-sm text-gray-500">16-30days</p>
          </div>
          <div>
            <p className="text-xl text-black-500 font-bold">$300.000</p>
            <p className="text-sm text-gray-500">31-45days</p>
          </div>
          <div>
            <p className="text-xl text-black-500 font-bold">$640.000</p>
            <p className="text-sm text-gray-500">Above 45 days</p>
          </div>
        </div>
      </div>

      {/* section -3 */}

      <div className="mx-[17px] mb-20">
        <div className="flex gap-[5px] items-center mb-5">
          <h1 className="text-xl">Sales and Expenses </h1>
          <HelpIcon />
        </div>

        <div className="flex gap-5 border border-gray-300 ">
          <div className="mr-32">
            <BarChart
              width={800}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#5f6de5" barSize={10} />
              <Bar dataKey="amt" stackId="a" fill="#58dc94" barSize={10} />
              <Bar dataKey="uv" fill="#ffc658" barSize={10} />
            </BarChart>
          </div>

          <Divider orientation="vertical" flexItem />

          <div className=" ml-[120px] text-right">
            <div className="mt-5 mb-5">
              <p className="text-blue-500 font-bold">Total Sales</p>
              <p className="text-xl font-bold">$31,362.334</p>
            </div>
            <div className="mt-5 mb-5">
              <p className="text-green-500 font-bold">Total Receipts</p>
              <p className="text-xl font-bold">$32,488.284</p>
            </div>
            <div className="mt-5 mb-5">
              <p className="text-red-500 font-bold">Total Sales</p>
              <p className="text-xl font-bold">$11,512.749</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndExpenses;
