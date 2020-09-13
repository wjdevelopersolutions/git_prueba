export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  address: Address;
  age: number;
  job: string;
  hobbies: string[];
}
  
export interface Address {
  streeth: string;
  city: string;
  country: string;
}

export let userDB = [
    {
        _id: 0,
        firstName: "wilson",
        lastName: "juma",
        address: {
            streeth: "Manzana D, Edificio 3, Apto. 2D", 
            city: "Puerto Plata",
            country: "Republica Dominicaca"
        },
        age: 34,
        job: "programming",
        hobbies: ["sport", "science", "tecnologies", "news"]
    },
    {
        _id: 1,
        firstName: "adrian",
        lastName: "morgan",
        address: {
            streeth: "Manzana D, Edificio 3, Apto. 2D", 
            city: "Puerto Plata",
            country: "Republica Dominicaca"
        },
        age: 34,
        job: "programming",
        hobbies: ["sport", "science", "tecnologies", "news"]
    },
    {
        _id: 2,
        firstName: "pedro",
        lastName: "perez",
        address: {
            streeth: "Manzana D, Edificio 3, Apto. 2D", 
            city: "Puerto Plata",
            country: "Republica Dominicaca"
        },
        age: 34,
        job: "programming",
        hobbies: ["sport", "science", "tecnologies", "news"]
    }
]
