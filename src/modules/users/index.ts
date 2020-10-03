import { UserFirebaseDataSource } from './data/datasources/user-firebase'
import { UserTransformer } from './data/transformers/user'
import { UserRepository } from './data/repositories/user'
import { FindUserUseCase } from './domain/usecases/findUser'
import { AuthFirebaseDataSource } from './data/datasources/auth-firebase'
import { AuthRepository } from './data/repositories/auth'
import { LoginWithEmailUseCase } from './domain/usecases/loginWithEmail'
import { LoginWithGoogleUseCase } from './domain/usecases/loginWithGoogle'
import { LogoutUseCase } from './domain/usecases/logout'
import { RegisterWithEmailUseCase } from './domain/usecases/registerWithEmail'
import { RegisterAuthChangedCallbackUseCase } from './domain/usecases/registerOnAuthChangedCallback'
import { GetRegisterFactoryUseCase } from './domain/usecases/getRegisterFactory'
import { GetResetPasswordFactoryUseCase } from './domain/usecases/getResetPasswordFactory'
import { ResetPasswordUseCase } from './domain/usecases/resetPassword'
import { GetMailingListFactoryUsecase } from './domain/usecases/getMailingListFactory'
import { SubscribeToMailingListUsecase } from './domain/usecases/subscribeToMailingList'
import { GetLoginFactoryUseCase } from './domain/usecases/getLoginFactory'
import { MakeAdminUsecase } from '@modules/users/domain/usecases/makeAdmin'
import { RemoveAdminUsecase } from '@modules/users/domain/usecases/removeAdmin'

const userDataSource = new UserFirebaseDataSource()
const authDataSource = new AuthFirebaseDataSource()

const userTransformer = new UserTransformer()

const userRepository = new UserRepository(userDataSource, userTransformer)
const authRepository = new AuthRepository(authDataSource)

export const FindUser = new FindUserUseCase(userRepository)
export const MakeAdmin = new MakeAdminUsecase(userRepository)
export const RemoveAdmin = new RemoveAdminUsecase(userRepository)
export const SubscribeToMailingList = new SubscribeToMailingListUsecase(userRepository)

export const LoginWithEmail = new LoginWithEmailUseCase(authRepository)
export const LoginWithGoogle = new LoginWithGoogleUseCase(authRepository)
export const Logout = new LogoutUseCase(authRepository)
export const RegisterWithEmail = new RegisterWithEmailUseCase(authRepository)
export const RegisterAuthChangedCB = new RegisterAuthChangedCallbackUseCase(authRepository)
export const ResetPassword = new ResetPasswordUseCase(authRepository)
export const GetLoginFactory = new GetLoginFactoryUseCase()
export const GetRegisterFactory = new GetRegisterFactoryUseCase()
export const GetResetPasswordFactory = new GetResetPasswordFactoryUseCase()
export const GetMailingListFactory = new GetMailingListFactoryUsecase()
