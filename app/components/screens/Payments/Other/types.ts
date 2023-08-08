import { IFooterItem } from "../../../layout/Footer/typex";

export interface IOtherItem extends Pick<IFooterItem, "iconName"> {
	title: string;
}
