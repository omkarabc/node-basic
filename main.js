import Cryptr from "cryptr";

const cryptObj = new Cryptr("12345");
const text = `c9e999370e6365eec03f77bc00d72b64bd6e79547651cb9a9f7de168cb8512ecd94fea1196eb0a1464797ad3d528683066fece05a90899b025e5e0251fb26f9839c1d88c63994877947698894c6648c255d754fb43b33e14d1873777ec42cf2a94aeb9`;
console.log(cryptObj.decrypt(text));
