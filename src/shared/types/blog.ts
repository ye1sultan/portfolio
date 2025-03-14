import { ReactNode } from "react";

export interface IBlog {
  name: string;
  date: string;
  link: string;
  description?: ReactNode[];
}
