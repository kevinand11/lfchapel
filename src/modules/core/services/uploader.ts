import { uploadFile } from '@/services/firebase'
import { Media } from '../data/models/base'

export const UploaderService = {
	call: async (path: string, file: File) :Promise<Media> => {
		return await uploadFile(path, file) as Media
	}
}
