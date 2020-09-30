import { FirestoreService } from '@modules/core/services/firebase'
import { GetClauses } from '@modules/core/data/datasources/base'
import { ArticleBaseDataSource } from './article-base'
import { ArticleFromModel, ArticleToModel } from '../models/article'

export class ArticleFirebaseDataSource implements ArticleBaseDataSource{

	public async create(article: ArticleToModel): Promise<string> {
		return await FirestoreService.create('articles', article)
	}

	public async find(id: string): Promise<ArticleFromModel | undefined> {
		return await FirestoreService.find('articles', id) as ArticleFromModel | undefined
	}

	public async get(conditions?: GetClauses): Promise<ArticleFromModel[]> {
		return await FirestoreService.get('articles', conditions) as ArticleFromModel[]
	}

	public async update(id: string, data: ArticleToModel): Promise<string> {
		return await FirestoreService.update('articles', id, data)
	}

	public async delete(id: string): Promise<void> {
		return await FirestoreService.delete('articles', id)
	}

}
