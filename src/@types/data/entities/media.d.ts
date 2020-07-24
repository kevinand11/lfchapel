declare interface Media {
    id: Id
    title: String | null
    description: String | null
    link: String
}

declare interface MediaWithPreview {
    id: Id
    title: String
    description: String
    link: String
    preview: String
}
