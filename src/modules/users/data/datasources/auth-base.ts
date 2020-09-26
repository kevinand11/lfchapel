import { AuthUser } from '../../domain/entities/auth'
import firebase from '@/services/firebase'

export abstract class AuthBaseDataSource {
	public abstract loginWithEmail: (user: AuthUser) => Promise<string>
	public abstract loginWithGoogle: () => Promise<string>
	public abstract logout: () => Promise<void>
	public abstract registerWithEmail: (user: AuthUser) => Promise<string>
	public abstract registerOnAuthChangedCallback: (cb: (user: firebase.User | null) => void) => void
	public abstract resetPassword: (user: { email: string}) => Promise<void>
}
