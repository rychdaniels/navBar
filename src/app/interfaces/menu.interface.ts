export interface RootObject{
  menusroots?: Menusroot[];
}

export interface Menusroot {
  id?: number;
  nombre?: string;
  url?: string;
  menus?: Menu[];
}

export interface Menu {
  id?: number;
  nombre?: string;
  url?: string;
}