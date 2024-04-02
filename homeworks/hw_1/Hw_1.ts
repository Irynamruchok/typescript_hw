
interface IGeo {
    lat: string;
    lng: string;
}
interface IAddress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}
interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string
}
interface IUser{
    id:number;
    name: string;
    username: string
    email:string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

const user: IUser = {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
            lat: "-68.6102",
            lng: "-47.0653"
        }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
    }

}
console.log(user.username)