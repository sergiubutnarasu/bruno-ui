export interface TabType {
  Identifier: string;
  Index: number;
  Name: string;
  Active: boolean;
  OnActive: (value: boolean) => any;
}
