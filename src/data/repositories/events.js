import Event from '@/data/entities/events'

const eventsRaw = [
	{ id: 1, title: 'Event 1 for every day', start: new Date('2020-07-08'), end: new Date('2020-07-08') },
	{ id: 2, title: 'Event 2 for every day', start: new Date('2020-07-09'), end: new Date('2020-07-09')  },
	{ id: 3, title: 'Event 3 for every day', start: new Date('2020-07-09'), end: new Date('2020-07-12') },
	{ id: 4, title: 'Event 4 for every day', start: new Date('2020-04-08'), end: new Date('2020-04-08') },
	{ id: 5, title: 'Event 5 for every day', start: new Date('2020-05-08'), end: new Date('2020-05-08') },
	{ id: 6, title: 'Event 6 for every day', start: new Date('2020-06-08'), end: new Date('2020-06-08') }
]

const events = eventsRaw.map((event) => new Event(event.id, event))

export default class EventRepository {
	static async getEvents(){
		return events
	}
	static async findBetween(start, end){
		return events.filter((event) => event.start >= start && event.start <= end)
	}
	static async find(id){
		return events.find((event) => event.id.toString() === id.toString())
	}
}
