export interface TextImageProps {
	imageUrl: string
    imagePosition: 'left' | 'right'
	title?: string
	texts: string[]
	highlightFirstWord?: boolean
}