export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  phone: string;
  title: string;
  manager: string;
  department: string;
};

export type LeaveType = {
  id: string;
  values: string;
  category: string;
  description: string;
};

export type Leave = {
  id: string;
  type: string;
  year: string;
  startDate: Date;
  endDate: Date;
  days: number;
  userName: string;
  userNote: string;
  tasksLink: string;
  userEmail: string;
  status: string;
  moderator: string;
  moderatorNote: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Balances = {
  id: string;
  year: string;
  annualCredit: number;
  annualUsed: number;
  annualAvailable: number;
  healthCredit: number;
  healthUsed: number;
  healthAvailable: number;
  studyCredit: number;
  studyUsed: number;
  studyAvailable: number;
  maternityCredit: number;
  maternityUsed: number;
  maternityAvailable: number;
  familyCredit: number;
  familyUsed: number;
  familyAvailable: number;
  paternityCredit: number;
  paternityUsed: number;
  paternityAvailable: number;
  unpaidUsed: number;
  name: string;
  email: string;
};

export type Events = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
};


export type CellTypes = {
  [x: string]: string | number | boolean | null | undefined;
  id: string;
  year?: string;
  annualCredit?: number | null;
  annualUsed?: number | null;
  annualAvailable?: number | null;
  healthCredit?: number | null;
  healthUsed?: number | null;
  healthAvailable?: number | null;
  studyCredit?: number | null;
  studyUsed?: number | null;
  studyAvailable?: number | null;
  maternityCredit?: number | null;
  maternityUsed?: number | null;
  maternityAvailable?: number | null;
  familyCredit?: number | null;
  familyUsed?: number | null;
  familyAvailable?: number | null;
  paternityCredit?: number | null;
  paternityUsed?: number | null;
  paternityAvailable?: number | null;
  unpaidUsed?: number | null;
  name: string;
  email: string;
};






