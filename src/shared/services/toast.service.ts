import { PopUpData } from "@/types";
import { SubjectManager } from "@/utils";

export const ToastService = new SubjectManager<PopUpData>();

export type ToastResult = {
  isConfirmed: boolean;
  isDennied: boolean;
};
