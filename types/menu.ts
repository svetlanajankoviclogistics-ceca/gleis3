// types/menu.ts
export type MenuDict = {
  menu: {
    welcomeTitle: string;
    welcomeText: string;
    appetizers: string;
    soups: string;
    mains: string;
    children: string;
    sides: string;
    [key: string]: string;
  };
  appetizersItems: MenuItem[];
  soupsItems: MenuItem[];
  mainsItems: MenuItem[];
  childrenItems: MenuItem[];
  sidesItems: MenuItem[];
};

type MenuItem = {
  name: string;
  desc?: string;
  price: string;
};