import path from "node:path";
import{Text,NewText,Level} from "../types";
import { parse,serialize} from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");
import { v4 as uuidv4 } from 'uuid';
uuidv4();


const defaultTexts:Text[]=[
    {
     id:'550e8400-e29b-41d4-a716-446655440000',
     content:'Le chat noir saute sur le mur',
     level:Level.easy,

    },
    {
     id:'550e8400-e29b-41d4-a716-446655440001',
     content:'Les montagnes majestueuses se dressent contre le ciel bleu, offrant une vue spectaculaire',
     level:Level.medium,

    }
]

function readAllTexts(level:Level| string):Text[]{
    const texts = parse(jsonDbPath, defaultTexts);
    if(level ==="undefined"){
        return texts;
    }
    const textsFiltered=texts.filter((text)=>text.level===level);
    return textsFiltered;

}

function readOneText(textId:string):Text | undefined{
    const texts = parse(jsonDbPath, defaultTexts);
    const textFound=texts.find((text)=>text.id === textId);
    if(!textFound)return undefined;
    return textFound;
}

function createOneText(newText: NewText): Text{
    const texts = parse(jsonDbPath, defaultTexts);
    
    const nextId=uuidv4();
    const text:Text={id:nextId, ...newText};
    const updatedText=[...texts,text];
    serialize(jsonDbPath,updatedText);
    return text;

}

function deleteOneText(textId:string):Text | undefined{
    const texts = parse(jsonDbPath, defaultTexts);
    
    const indexDeleted=texts.findIndex((text)=>text.id === textId);
    if(indexDeleted === -1)return undefined;

    const textDeleted=texts.splice(indexDeleted,1);
    serialize(jsonDbPath,texts);
    return textDeleted[0];
}

function updateOneText(textId:string,newText:NewText):Text | undefined{
    const texts = parse(jsonDbPath, defaultTexts);
    
    const textToUpdate=texts.find((text)=>text.id === textId);
    if(!textToUpdate)return undefined;

    textToUpdate.content=newText.content;
    textToUpdate.level=newText.level;
    serialize(jsonDbPath,texts);
    return textToUpdate;

}

export {
    readAllTexts,
    readOneText,
    createOneText,
    deleteOneText,
    updateOneText,
    
  } 