/* eslint-disable @typescript-eslint/naming-convention */
export enum FlashTypes {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export type Flash = {
  message: string;
  type: FlashTypes;
  opts?: {
    modal?: boolean;
    detail: string;
  };
};

export interface Course {
  name: string;
  githubLink: string;
  tags: string[];
}

export interface Courses {
  courses: Course[];
}

type Bashrc =
  | { enabled: true; path: string }
  | { enabled: false; path?: string };

type Preview =
  | {
      open: true;
      url: string;
      timeout: number;
    }
  | { open: false; url?: string; timeout?: number };

type Terminal = {
  name: string;
  directory: string;
  show: boolean;
  message?: string;
};

// TODO
type File = string;

export interface Config {
  path: string;
  scripts: {
    "develop-course": string;
    "run-course": string;
    test?: string;
  };
  preview?: Preview;
  bashrc?: Bashrc;
  terminals?: Terminal[];
  files?: File[];
}
