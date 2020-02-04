export interface RootObject{
  menusroots?: Menusroot[];
}

export interface Menusroot {
  id?: number;
  nombre?: string;
  url?: string;
  menus?: Menusroot[];
}

