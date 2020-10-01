export const capitalizeText = (text: string) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`

export const extractTextFromHTML = (html: string) => html?.trim().replace(/<[^>]+>/g, '') ?? ''

export const trimToLength = (body: string, length: number) => {
	if(body.length < length){ return body }
	const index = body.indexOf(' ', length)
	return `${body.slice(0, index)}...`
}

export const extractDate = (date: Date) => {
	const now = new Date()
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
	const yesterday = new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1)
	if(date > today){
		return date.toTimeString().slice(0,5)
	}else if(date > yesterday){
		return 'Yesterday'
	}else{
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
	}
}

export const getDateParts = (d: Date) => {
	const formatter = Intl.DateTimeFormat('pt-BR',{
		year:'numeric', month:'numeric',day:'numeric',
		hour: 'numeric', minute:'numeric',second:'numeric',
	}).formatToParts(d)
	return formatter.reduce((acc, { type, value })=> {
		acc[type] = value
		return acc
	}, {} as { [key: string]: string })
}
