/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group17OverridesProps = {
    Group17?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    rogin?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group17Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group17OverridesProps | undefined | null;
}>;
export default function Group17(props: Group17Props): React.ReactElement;
