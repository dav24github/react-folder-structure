import { PopUpData } from "@/types";
import { SubjectManager } from "@/utils";

export const PopUpService = new SubjectManager<PopUpData>();

export type PopUpResult = {
  isConfirmed: boolean;
  isDennied: boolean;
};
