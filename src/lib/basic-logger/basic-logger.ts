import Logger from "@core/logger"
import { highlight } from "cli-highlight"

export default class BasicLogger implements Logger {
  public info(value: unknown) {
    console.info(value)
  }

  public warn(value: unknown) {
    console.warn(value)
  }

  public log(value: unknown) {
    console.log(value)
  }

  public error(value: unknown) {
    console.error(value)
  }

  public sql(sql: string, params: unknown) {
    console.log(highlight(sql, { language: "sql", ignoreIllegals: true }))
    console.log(params)
  }
}
