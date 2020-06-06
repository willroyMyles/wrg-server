import {EventEmitter} from "events"

export const eventEmitter = new EventEmitter()

export const tp = {backgroundColor: "transparent"}

export const strToNum = (value: string) => Number.parseInt(value)
