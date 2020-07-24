import Article from '@/data/entities/articles'

const description = 'Heresies never really go away, do they? They just get repackaged, repurposed, and recycled for every generation. And the Church must always stay on guard, always ready to defend the faith once delivered against new affronts by old ideas.\n' +
	'\n' +
	'Around Christmas time each year, for instance, we get to see the new variations on the historical understanding of the birth of Christ (just as every Easter we get to re-experience the annual attacks on the historicity of the resurrection). Just last week, I responded to this question by someone on Twitter: “If you’re a Christian, do you believe in the virgin birth?”\n' +
	'\n' +
	'I replied that the question itself would have been viewed as odd by our theological forefathers. The virgin birth is one of the cornerstones of Christian belief. Without it, you don’t have Christianity. The original questioner accused me of “gatekeeping.” She said, “You don’t get to decide who’s in and who’s out.” And she’s right. I don’t. We don’t make orthodoxy. As Chesterton said, “It is making us!”\n' +
	'\n' +
	'So you and I have the option, of course, of believing or disbelieving in the virgin birth. But if we disbelieve, we don’t get to call our tailor-made theology “Christianity.” Orthodoxy is not a buffet. The virgin birth is an essential tenet of Christianity — a first-order doctrine — and here is why:\n' +
	'\n' +
	'The Scriptures are not ambiguous about Christ’s birth.\n' +
	'\n' +
	'Sometimes we hear theologians say the “virgin” referred to in Isaiah’s messianic prophecy (7:14) is simply a “young woman of marriage-able age.” The word of course does include that semantic possibility, but in the light of the new covenant, we see with a lot more clarity what “kind” of virgin the Christ child is born to — not simply a young woman of marriage-able age, but a woman who had never experienced sexual intercourse.\n' +
	'\n' +
	'“Now the birth of Jesus Christ took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit.” \n' +
	'\n' +
	'Matthew 1:18\n' +
	'“Before they came together” is a reference to sexual intercourse. Before Joseph and Mary had been married or engaged in any procreative activity, she was found to be with child. And if that reference isn’t clear enough, Matthew tells us that the child is “from the Holy Spirit.” Then, in verse 25, Matthew mentions that Joseph did not “know” Mary (in the sexual sense) until after she’d given birth to this son.'

const tags = ['Morning Mass', 'Holy Trinity', 'Roman Empire', 'Blessed Sacrament']

const articlesRaw: RawArticle[] = [
	{ id: 1, description, tags, createdAt: new Date('2020 04 29'), title: 'Love After Marriage', user: { image: '/mock/users/boy2.jpg', name: 'Joe Hernandez' }, image: '/mock/articles/article (1).jpg'},
	{ id: 2, description, tags, createdAt: new Date('2020 03 03'), title: 'The Theoretical Educator as Sherpa', user: { image: '/mock/users/official.jpg', name: 'Bill Hathaway' }, image: '/mock/articles/article (2).jpg' },
	{ id: 3, description, tags, createdAt: new Date('2020 02 15'), title: 'Definitions: Gospel and Persuade', user: { image: '/mock/users/girl.png', name: 'Mary Martials' }, image: '/mock/articles/article (3).jpg' },
	{ id: 4, description, tags, createdAt: new Date('2020 01 01'), title: 'When your spouse won\'t succeed', user: { image: '/mock/users/girl.png', name: 'Mary Martials' }, image: '/mock/articles/article (4).jpg' },
	{ id: 5, description, tags, createdAt: new Date('2019 12 29'), title: 'Laziness, our responsible sin', user: { image: '/mock/users/boy2.jpg', name: 'Joe Hernandez' }, image: '/mock/articles/article (5).jpg' },
	{ id: 6, description, tags, createdAt: new Date('2019 08 12'), title: 'You won\'t "Let" God do anything', user: { image: '/mock/users/official.jpg', name: 'Bill Hathaway' }, image: '/mock/articles/article (6).jpg' },
]

const articles: Article[] = articlesRaw.map((article) => new Article(article))

export default class ArticleRepository {
	static async getArticles(): Promise<Article[]>{
		return articles
	}
	static async findArticleById(id: Id): Promise<Article | undefined>{
		return articles.find((article) => article.id.toString() === id.toString())
	}
}
