declare interface RawArticle {
    id: Id
    title: String
    description: String
    tags: String[]
    createdAt: Date
    image: String
    user: { image: String; name: String }
}
