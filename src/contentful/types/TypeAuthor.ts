import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeClusterSkeleton } from "./TypeCluster";

export interface TypeAuthorFields {
    name: EntryFieldTypes.Symbol;
    photo?: EntryFieldTypes.AssetLink;
    cluster: EntryFieldTypes.EntryLink<TypeClusterSkeleton>;
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;
