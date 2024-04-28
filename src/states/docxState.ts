import { create } from "zustand";
import { docxHandler } from "./handler/docxHandler";

interface DocxState {
  docxHandler: () => Promise<void>;
}

export const docxState = create<DocxState>((set) => ({
  async docxHandler() {
    docxHandler();
  },
}));
