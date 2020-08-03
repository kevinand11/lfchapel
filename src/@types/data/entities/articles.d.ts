declare interface RawArticle {
    id: Id
    title: string
    description: string
    tags: string[]
    createdAt: Date
    image: string
    user: { image: string, name: string }
}

declare interface ArticleI {
    id: Id
    title: string
    description: string
    tags: string[]
    createdAt: Date
    image: string
    userImage: string
    userName: string
    trimmedDescription: string
    route: string
}
