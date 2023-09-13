import React from "react";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.data.length;
  console.log(bookings.data.length);
  // 2.
  const sales = bookings.data.reduce((acc, cur) => acc + cur.totalPrice, 0);
  // 3.
  const checkins = confirmedStays.length;
  console.log(checkins);
  // 4. num checked in nights / all available nights (num of days * )
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="Bookings"
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color={"indigo"}
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + " %"}
      />
    </>
  );
}

export default Stats;
