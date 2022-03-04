export interface MenuItem {
    key: number,
    text: string,
    url: string
}

export interface MenuProps {
    items: MenuItem[],
    onItemClicked: (url:string) => void
}