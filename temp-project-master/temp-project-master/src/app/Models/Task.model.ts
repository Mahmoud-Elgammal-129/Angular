// task.model.ts
export interface Task {
    BX_Mission_Questions_ID_PK: number;
    BX_Questions_ID_PK: number;
    BX_Questions_Type_ID_FK: number;
    BX_Questions_Title_EN: string;
    BX_Questions_Title_AR: string;
    BX_Questions_Text_EN: string;
    BX_Questions_Text_AR: string;
    BX_Questions_Disc_EN: string;
    BX_Questions_Disc_AR: string;
    BX_Questions_Correct_Point: number;
    BX_Questions_Wrong_Point: number;
    BX_Questions_Correct_Answer_EN: string;
    BX_Questions_Correct_Answer_AR: string;
    Questions_Details: QuestionDetail[]; // This will be parsed to an array of objects
  }
  
  export interface QuestionDetail {
    BX_Questions_Details_Key: string;
    BX_Questions_Details_Value: string;
  }
  