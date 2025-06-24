import { PopUpService } from "@/shared/services/popup.service";
import { PopUpData } from "@/types";

const popUpService$ = PopUpService.getSubject();

export const PopUpUtilities = {
  error(msg: string) {
    PopUpService.setSubject({ msg, title: `¡Error!`, type: "error" }); // red
  },
  wrong(msg: string) {
    PopUpService.setSubject({ msg, title: "¡Oh no!", type: "warning" }); // yellow
  },
  inProgress(msg: string) {
    PopUpService.setSubject({
      msg,
      title: `Subiendo`,
      type: "inprogress",
    });
  },

  // Interactive
  warning(msg: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({ msg, title: "¡Alerta!", type: "warning" }); // yellow
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
      });
    });
  },
  success(msg: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({ msg, title: "¡Bien hecho!", type: "success" }); // green
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
      });
    });
  },
  important(msg: string, title?: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({
        msg,
        title: title ?? "Importante",
        type: "important",
      }); // blue
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
        if (data.type === "close") {
          resolve({ isConfirmed: false, isDennied: true });
        }
      });
    });
  },
  confirmation(msg: string, title?: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({
        msg,
        title: title ?? "¿Deseas continuar?",
        type: "confirmation",
      });
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
        if (data.type === "close") {
          resolve({ isConfirmed: false, isDennied: true });
        }
      });
    });
  },
  delete(msg: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({
        msg,
        title: "Eliminar",
        type: "delete",
      });
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
        if (data.type === "close") {
          resolve({ isConfirmed: false, isDennied: true });
        }
      });
    });
  },
  block(msg: string): Promise<PopUpResult> {
    return new Promise(async (resolve) => {
      PopUpService.setSubject({
        msg,
        title: "Bloquear",
        type: "block",
      });
      popUpService$.subscribe((data: PopUpData) => {
        if (data.type === "accept") {
          resolve({ isConfirmed: true, isDennied: false });
        }
        if (data.type === "close") {
          resolve({ isConfirmed: false, isDennied: true });
        }
      });
    });
  },
  // *******************

  // Config
  accept() {
    PopUpService.setSubject({ msg: "", title: "", type: "accept" });
  },
  close() {
    PopUpService.setSubject({ msg: "", title: "", type: "close" });
  },
  cancel() {
    PopUpService.setSubject({ msg: "", title: "", type: "cancel" });
  },
  // *******************
};
