import { PropsWithChildren } from "react";

type Props = {
  title: string;
  subtitle?: string;
  onContinue?(): void;
  buttonText?: string;
  href?: string;
  showPrivacyPolicy?: boolean
}

export interface IScreenProps extends PropsWithChildren<Props> { }


