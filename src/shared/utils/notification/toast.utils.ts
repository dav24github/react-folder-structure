import { ToastService } from "@/shared/services/toast.service";
import { PopUpData } from "@/types";

const toastService$ = ToastService.getSubject();

export const ToastUtilities = {
  success(msg: string): Promise<ToastResult> {
    return new Promise(async (resolve) => {
      ToastService.setSubject({ msg, title: "¡Bien hecho!", type: "success" }); // green
      toastService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
      });
    });
  },
  error(msg: string): Promise<ToastResult> {
    return new Promise(async (resolve) => {
      ToastService.setSubject({ msg, title: "¡Oh no!", type: "error" }); // green
      toastService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
      });
    });
  },

  // Config
  accept() {
    ToastService.setSubject({ msg: "", title: "", type: "accept" });
  },
  hide() {
    ToastService.setSubject({ msg: "", title: "", type: "hide" });
  },
  close() {
    ToastService.setSubject({ msg: "", title: "", type: "close" });
  },
  // *******************
};
