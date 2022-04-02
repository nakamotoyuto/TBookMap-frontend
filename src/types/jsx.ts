import { ForwardRefExoticComponent, PropsWithRef } from "react";

export type ElementFrec<T extends keyof JSX.IntrinsicElements> = ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>;
