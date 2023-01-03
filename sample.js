const moment = require("moment");
// const Getrange = () => {
const today = Date.now();
const currentyear = moment().year();
const firstmonday = moment()
  .year(currentyear)
  .month(0)
  .startOf("month")
  .isoWeekday(1);
const lastmonday = moment()
  .year(currentyear)
  .month(11)
  .endOf("month")
  .isoWeekday(1);

const range = {
  start: firstmonday,
  end: lastmonday,
};
// };
console.log(range.start);

if (today < firstmonday.unix() * 1000) {
  range.start = moment()
    .year(currentyear - 1)
    .month(11)
    .endOf("month")
    .isoWeekday(1);

  console.log("i m heree");
} else {
  range.end = moment()
    .year(currentyear + 1)
    .month(0)
    .startOf("month")
    .isoWeekday(1);
  console.log("i m theree");
}

// Getrange();
