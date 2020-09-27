import { Auth } from '@/application/usecases/store/modules/auth'

export const useStore = () => {
	return {
		auth: Auth
	}
}
