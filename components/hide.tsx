import { PropsWithChildren } from "react";

export default function Hide(
  props: PropsWithChildren<{
    hide: boolean;
  }>
) {
  if (props.hide) {
    return "*********";
  }

  return props.children;
}
