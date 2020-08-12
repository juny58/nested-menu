export interface MenuItemInterface {
    level_name: string;
    entries: EntryInterface[]
}

export interface EntryInterface {
    id: number;
    name: string;
    children: MenuItemInterface
}