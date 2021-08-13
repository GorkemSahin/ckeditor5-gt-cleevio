/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "@ckeditor/*" {
  export const CKEditor: any;
}

declare module "ckeditor5-gt-cleevio/build/ckeditor" {
  const Editor: any;
  export default Editor;
}
