declare interface Media {
    id: Id
    title: string | null
    description: string | null
    link: string
}

declare interface MediaWithPreview extends Media{
    preview: string
}

declare interface VideoI extends MediaWithPreview {
    trimmedDescription?: string
}
