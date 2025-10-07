let fullname: string = "Titkosszolgálat Béla";
let age: number = 25;
let isAdmin: boolean = true;

let numbers: number[] = [1, 3, 5, 7, 9];

let products: object[] = [];

let x: any = "Bármi lehet";


function getAge(user: User):number {
   return user.age;
}

interface Profile {
    id: number;
    path: string;
    fileName: string;
    ext: string;
    mimeType: string;
}
//type alias
type Role = "Admin" | "User" | "Guest"; //union type

//enum = felsorolás kb.
enum Status {
    Active,
    Inactive, 
    Pending,
    Banned
}

enum Colors {
    RED = "#FF0000",
    BLACK = "#000000",
    WHITE = "#FFFFFF",
    BLUE = "#0000FF",
    GREEN = "#00FF00",
    BROWN = "#A52A2A"
}

interface User {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    birthdate: Date | undefined; //union type
    birthPlace: string;
    hair: Colors;
    profileImage?: Profile;
    role: Role;
    status: Status;
    age: number;
}

const user: User = {
    id: 0,
    name: "",
    address: "",
    email: "",
    phone: "",
    birthdate: undefined,
    birthPlace: "",
    profileImage: undefined,
    role: "User",
    status: Status.Active,
    hair: Colors.BLACK,
    age: 0
};


user.name = "Kálmán bá'";
user.age = 72;

console.log(`${user.name} ${getAge(user)} éves.`);