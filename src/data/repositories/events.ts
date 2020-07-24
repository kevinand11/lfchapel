import Event from '@/data/entities/events'

const eventsRaw: RawEvent[] = [
	{ id: 1, title: 'Thanksgiving', description: 'We are gathering to say a few words of prayer to the Lord', start: new Date(2020,6,4), end: new Date(2020,6,5, 7,30), allDay: false },
	{ id: 2, title: 'Lucy\'s Memorial', description: 'Service to honor the memory of young Lucy Hathaway', start: new Date(2020,6,9,7,30), end: new Date(2020, 6, 9, 19,30), allDay: true},
	{ id: 3, title: 'Vigil', description: 'Weekly vigils for the month',start: new Date(2020,6,9,6,30), end: new Date(2020,6,12), allDay: false },
	{ id: 4, title: 'St Martin\'s', description: 'Service to celebrate the feast of St Martin\'s day', start: new Date(2020,6,14), allDay: true }
]

const events = eventsRaw.map((event) => new Event(event))

export default class EventRepository {
	static async getEvents(): Promise<Event[]>{
		return events
	}
	static async findEventsBetween(start: Date, end: Date): Promise<Event[]>{
		return events.filter((event) => event.start >= start && event.start <= end)
	}
	static async findEventById(id: Id): Promise<Event | undefined>{
		return events.find((event) => event.id.toString() === id.toString())
	}
	static async findEventsByDate(date: Date): Promise<Event[]>{
		return events.filter((event) => event.isWithinDate(date))
	}
}
