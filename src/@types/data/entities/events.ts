type EventWithEnd = {
    id: Id
    title: string
    description: string
    start: Date
    end: Date
    allDay: false
}

type EventWithoutEnd = {
    id: Id
    title: string
    description: string
    start: Date
    end?: Date
    allDay: true
}

declare type RawEvent = EventWithEnd | EventWithoutEnd
