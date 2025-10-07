var fullname = "Titkosszolgálat Béla";
var age = 25;
var isAdmin = true;
var numbers = [1, 3, 5, 7, 9];
var products = [];
var x = "Bármi lehet";
function getAge(user) {
    return user.age;
}
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
    Status[Status["Banned"] = 3] = "Banned";
})(Status || (Status = {}));
var Colors;
(function (Colors) {
    Colors["RED"] = "#FF0000";
    Colors["BLACK"] = "#000000";
    Colors["WHITE"] = "#FFFFFF";
    Colors["BLUE"] = "#0000FF";
    Colors["GREEN"] = "#00FF00";
    Colors["BROWN"] = "#A52A2A";
})(Colors || (Colors = {}));
var user = {
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
console.log("".concat(user.name, " ").concat(getAge(user), " \u00E9ves."));
