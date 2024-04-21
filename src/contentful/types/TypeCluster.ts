import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeClusterFields {
    nama: EntryFieldTypes.Symbol;
}

export type TypeClusterSkeleton = EntrySkeletonType<TypeClusterFields, "cluster">;
export type TypeCluster<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeClusterSkeleton, Modifiers, Locales>;
