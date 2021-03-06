/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EntryPicks {
  activeChip?: string;
  automaticSubs?: any[];
  entryHistory?: {
    id?: number;
    movement?: string;
    points?: number;
    totalPoints?: number;
    rank?: number;
    rankSort?: number;
    overallRank?: number;
    targets?: null;
    eventTransfers?: number;
    eventTransfersCost?: number;
    value?: number;
    pointsOnBench?: number;
    bank?: number;
    entry?: number;
    event?: number;
    [k: string]: any;
  };
  event?: {
    id?: number;
    name?: string;
    deadlineTime?: string;
    averageEntryScore?: number;
    finished?: boolean;
    dataChecked?: boolean;
    highestScoringEntry?: number;
    deadlineTimeEpoch?: number;
    deadlineTimeGameOffset?: number;
    deadlineTimeFormatted?: string;
    highestScore?: number;
    isPrevious?: boolean;
    isCurrent?: boolean;
    isNext?: boolean;
    [k: string]: any;
  };
  picks?: {
    element?: number;
    position?: number;
    isCaptain?: boolean;
    isViceCaptain?: boolean;
    multiplier?: number;
    [k: string]: any;
  }[];
  [k: string]: any;
}
