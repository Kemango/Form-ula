export type FormType = "text" | "paragraph" | "checkbox" | "select";
  
export type TextForm = {
  id: string;
  type: "text";
  required: boolean;
  header:string;
  placeholder: string;
};

export type ParagraphForm = {
  id: string;
  type: "paragraph";
  required: boolean;
  header:string;
  placeholder: string;
};

export type CheckboxForm = {
  id: string;
  type: "checkbox";
  required: boolean;
  header:string;
  placeholder: string;
};

export type SelectForm = {
  id: string;
  type: "select";
  required: boolean;
  header:string;
  placeholder: string;
};

export type LeftSidebarProps = {
  addText: () => void;
  addParagraph: () => void;
  addCheckBox: () => void;
  addSelect: () => void;
};

