// import { fake, phone } from 'faker';


const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};
const newFakeUser = createUser();
console.log(newFakeUser)

const createCompany = ()=> {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            county: faker.address.county()
        }
    }
    return newCompany;
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );;
});
app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );;
});
app.get("/api/user/company", (req, res) => {
    res.json( [createUser(), createCompany()] );;
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );



