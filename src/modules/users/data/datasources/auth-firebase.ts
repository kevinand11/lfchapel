import { AuthBaseDataSource } from './auth-base'
import { AuthUser } from '../../domain/entities/auth'
import firebase, { auth } from '@/services/firebase'
import { FirestoreService } from '@/modules/core/services/firebase'

export class AuthFirebaseDataSource implements AuthBaseDataSource{
	public async loginWithEmail({ email, password }: AuthUser): Promise<string> {
		const record = await auth.signInWithEmailAndPassword(email, password)
		return record.user?.uid ?? ''
	}

	public async loginWithGoogle(): Promise<string> {
		const googleProvider = new firebase.auth.GoogleAuthProvider()
		const record = await auth.signInWithPopup(googleProvider)
		await FirestoreService.update('users', record.user?.uid ?? '', {} )
		return record.user?.uid ?? ''
	}

	public async logout(): Promise<void> {
		await auth.signOut()
	}

	public async registerWithEmail({ name, email, password }: AuthUser): Promise<string> {
		const record = await auth.createUserWithEmailAndPassword(email, password)
		await record.user?.updateProfile({ displayName: name })
		await FirestoreService.update('users', record.user?.uid ?? '', { bio: { name } })
		return record.user?.uid ?? ''
	}

	public registerOnAuthChangedCallback(cb: (user: firebase.User | null) => void): void {
		auth.onAuthStateChanged(cb)
	}

	public async resetPassword(user: { email: string }): Promise<void> {
		return await auth.sendPasswordResetEmail(user.email)
	}
}
