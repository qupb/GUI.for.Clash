// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';

export function Download(arg1:string,arg2:string):Promise<main.ApiIOResult>;

export function Exec(arg1:string,arg2:Array<string>):Promise<main.ApiIOResult>;

export function GetSystemProxy():Promise<main.ApiIOResult>;

export function HttpGet(arg1:string,arg2:{[key: string]: string}):Promise<main.ApiHTTPResult>;

export function KillProcess(arg1:number):Promise<main.ApiIOResult>;

export function ProcessInfo(arg1:number):Promise<main.ApiIOResult>;

export function Readfile(arg1:string):Promise<main.ApiIOResult>;

export function SetSystemProxy(arg1:boolean,arg2:string):Promise<main.ApiIOResult>;

export function StartKernel(arg1:string,arg2:string):Promise<main.ApiIOResult>;

export function UnzipZIPFile(arg1:string,arg2:string):Promise<main.ApiIOResult>;

export function Writefile(arg1:string,arg2:string):Promise<main.ApiIOResult>;
