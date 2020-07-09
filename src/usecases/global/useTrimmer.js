import { computed } from '@vue/composition-api'

const trimmer = (string, length = 200) => {
	if(string.length < length){ return string }
	const index = string.indexOf(' ', length)
	return `${string.slice(0, index)}...`
}

export default (props, name, key) => {
	const trimmed = computed(() => trimmer(props[name][key]))
	return { trimmed }
}
