const PAGE_SIZE = 12

const LOCAL = "en-US"

const FORMAT_DATE = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const FORMAT_DATE_TIME = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

const SPREAD_DATE_TIME_FORMAT = {
  ...FORMAT_DATE_TIME,
  timeZoneName: "short",
}

export { PAGE_SIZE, LOCAL, FORMAT_DATE, FORMAT_DATE_TIME, SPREAD_DATE_TIME_FORMAT }
