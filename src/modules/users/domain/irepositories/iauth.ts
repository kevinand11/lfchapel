import { AuthUser } from '../entities/auth'
import firebase from '@/services/firebase'

export interface IAuthRepository {
	loginWithEmail: (user: AuthUser) => Promise<string>
	loginWithGoogle: () => Promise<string>
	logout: () => Promise<void>
	registerWithEmail: (user: AuthUser) => Promise<string>
	registerOnAuthChangedCallback: (cb: (user: firebase.User | null) => void) => void
	resetPassword: (user: {email: string}) => Promise<void>
}
