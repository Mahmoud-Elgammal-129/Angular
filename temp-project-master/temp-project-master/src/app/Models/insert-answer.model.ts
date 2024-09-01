  // insert-answer.model.ts
  export interface InsertAnswer {
    BX_User_Questions_Mission_Mission_Questions_ID_FK: number;
    BX_User_Questions_Mission_User_ID_FK: number;
    BX_User_Questions_Mission_Answer: string;
    BX_User_Questions_Mission_Correct: number;
    BX_User_Score_Game_Type_ID_FK: number;
    BX_User_Score_User_ID_FK: number;
    BX_User_Score_Point: number;
    BX_User_Score_Comment: string;
    BX_User_Score_DateTime: Date;
    BX_User_Score_Camp_ID_FK: number;
    BX_User_Score_Brand_ID_FK: number;
    BX_User_Score_Questions_Mission_ID_FK: number;
  }