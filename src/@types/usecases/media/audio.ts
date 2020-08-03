declare type AudioPlayers = {
    [key in Id]: AudioInstance
}

declare type AudioInstance = {
    state: AudioState
    audio: HTMLAudioElement
}

declare interface AudioState {
    loading: boolean
    playing: boolean
    time: number
    error: string
    length: number
}
