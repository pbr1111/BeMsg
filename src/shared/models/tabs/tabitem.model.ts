import { IBasePage } from "../pages/basepage.model";

export interface ITabItem {
    title: string;
    icon: string;
    page: IBasePage;
}