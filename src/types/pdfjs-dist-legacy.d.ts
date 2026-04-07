declare module "pdfjs-dist/legacy/build/pdf.mjs" {
  export type TextItem = {
    str: string;
  };

  export type TextMarkedContent = {
    type?: string;
  };

  export type TextContent = {
    items: Array<TextItem | TextMarkedContent>;
  };

  export type Viewport = {
    width: number;
    height: number;
  };

  export type PDFPageProxy = {
    getTextContent(): Promise<TextContent>;
    getViewport(params: { scale: number }): Viewport;
    render(params: { canvas: unknown; viewport: Viewport }): { promise: Promise<void> };
  };

  export type PDFDocumentProxy = {
    numPages: number;
    getPage(pageNumber: number): Promise<PDFPageProxy>;
    destroy(): void | Promise<void>;
  };

  export const GlobalWorkerOptions: {
    workerSrc: string;
  };

  export function getDocument(params: { data: Uint8Array; disableWorker?: boolean }): {
    promise: Promise<PDFDocumentProxy>;
  };
}

declare module "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url" {
  const workerSrc: string;
  export default workerSrc;
}
