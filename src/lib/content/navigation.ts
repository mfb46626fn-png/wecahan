import { mainNavigation } from "@/data/site/navigation";
import { footerData } from "@/data/site/footer";
import { useTranslations } from "next-intl";

// This will be used in Client Components or with getTranslations in Server Components
export function getTranslatedNavigation(t: any) {
  return mainNavigation.map((item) => ({
    ...item,
    label: t(`Navigation.${item.label}`),
  }));
}
