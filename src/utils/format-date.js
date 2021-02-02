import { DateTime } from "luxon"
import { FORMAT_DATE, LOCAL, FORMAT_DATE_TIME, SPREAD_DATE_TIME_FORMAT } from "./constants"

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat(LOCAL, FORMAT_DATE).format(new Date(timestamp))
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat(LOCAL, SPREAD_DATE_TIME_FORMAT).format(new Date(timestamp))
}

export function formalDateTimeLocal(timestamp) {
  const getDateTime = DateTime.fromISO(timestamp, { locale: LOCAL, setZone: true })
  const offsetTimeZone = getDateTime.offsetNameShort
  const localDateTime = getDateTime.toLocaleString(FORMAT_DATE_TIME)
  return localDateTime + " " + offsetTimeZone
}
