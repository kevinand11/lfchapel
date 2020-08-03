declare type RawEvent = {
    id: Id
    title: string
    description: string
    start: Date
    end?: Date
    allDay: boolean
}
declare interface EventI extends RawEvent {
    isWithinDate: (date: Date) => boolean
}
