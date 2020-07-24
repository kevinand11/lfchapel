declare interface Media {
    id: Id
    title: string | null
    description: string | null
    link: string
}

declare interface MediaWithPreview {
    id: Id
    title: string
    description: string
    link: string
    preview: string
}
