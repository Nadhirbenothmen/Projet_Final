import { RoleType } from "./Role";

export class User {
    
    
    groupId!:number;
    email!:String;
    nom!:String;
    prenom!:String;
    hasProfile!:boolean;
    motDePasse!:String;
    
    type!:RoleType;
    
  
  }