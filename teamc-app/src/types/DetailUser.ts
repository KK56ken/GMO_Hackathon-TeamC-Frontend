import { AbstractTask } from "./AbstractTask";

export type DetailUser = {
  department: string;
  name: string;
  skillSet: string[];
  slackId: string;
  status: number;
  tasks: AbstractTask[];
};
