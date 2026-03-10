const fs = require("fs");

const firstNames = [
    "Aarav", "Vivaan", "Aditya", "Arjun", "Sai", "Reyansh", "Krishna", "Ishaan", "Shaurya", "Atharva",
    "Dhruv", "Kabir", "Rohan", "Ananya", "Aadhya", "Diya", "Myra", "Ira", "Anika", "Saanvi",
    "Priya", "Riya", "Neha", "Sneha", "Pooja", "Kavya", "Nisha", "Meera", "Aditi", "Shruti",
    "Rahul", "Amit", "Karan", "Varun", "Siddharth", "Yash", "Harsh", "Nikhil", "Manish", "Vikas",
    "Arnav", "Dev", "Parth", "Om", "Vedant", "Aryan", "Tanmay", "Pranav", "Tanish", "Rajat",
    "Ashwin", "Jay", "Kunal", "Rakesh", "Suresh", "Mahesh", "Ritu", "Komal", "Payal", "Preeti",
    "Alok", "Anil", "Sunil", "Rajesh", "Mukesh", "Deepak", "Pankaj", "Ajay", "Vijay", "Sanjay",
    "Gaurav", "Tarun", "Ravindra", "Bhavesh", "Hitesh", "Jignesh", "Hardik", "Dhaval", "Yogesh", "Chirag",
    "Tejas", "Mihir", "Nirav", "Kishan", "Ramesh", "Dinesh", "Nitin", "Sachin", "Sagar", "Umesh",
    "Shweta", "Pallavi", "Bhavna", "Heena", "Trupti", "Sejal", "Rupal", "Krupa", "Falguni", "Minal"
];

const lastNames = [
    "Sharma", "Verma", "Gupta", "Agarwal", "Singh", "Kumar", "Mishra", "Tiwari", "Dubey", "Pandey",
    "Chatterjee", "Banerjee", "Mukherjee", "Bhattacharya", "Ghosh", "Das", "Dutta", "Sen", "Bose", "Roy",
    "Patel", "Mehta", "Shah", "Desai", "Trivedi", "Joshi", "Pandya", "Parikh", "Modi", "Vyas",
    "Reddy", "Naidu", "Rao", "Murthy", "Iyer", "Iyengar", "Nair", "Menon", "Pillai", "Shetty",
    "Kulkarni", "Joshi", "Deshpande", "Chavan", "Patil", "Sawant", "Kadam", "Jadhav", "Shinde", "More",
    "Yadav", "Chaudhary", "Chauhan", "Thakur", "Rajput", "Solanki", "Rathore", "Sisodia", "Shekhawat", "Tanwar",
    "Bansal", "Goyal", "Mittal", "Jindal", "Singhal", "Ahuja", "Arora", "Kapoor", "Malhotra", "Khanna",
    "Chopra", "Batra", "Sethi", "Suri", "Bedi", "Gill", "Sandhu", "Dhillon", "Brar", "Sidhu",
    "Saxena", "Srivastava", "Nigam", "Mathur", "Tripathi", "Dwivedi", "Chaturvedi", "Upadhyay", "Pathak", "Agnihotri",
    "Kamble", "Pawar", "Gaikwad", "Salunkhe", "Gawande", "Shukla", "Mahajan", "Kohli", "Lal", "Sood"
];
// console.log(firstNames[99])

const cities = [
    "Ahmedabad",
    "Surat",
    "Mumbai",
    "Delhi",
    "Bangalore"
];


const genders = ["Male", "Female"];

function generatePhone() {
    let phone = "9";
    for (let i = 0; i < 9; i++) {
        phone += Math.floor(Math.random() * 10);
    }
    return phone;
}

function generateDOB() {
    const start = new Date("2004-01-01");
    const end = new Date("2005-01-01");

    const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    return randomDate.toISOString().split("T")[0];
}

const addresses = [
    "MG Road", "Station Road", "Nehru Nagar", "Gandhi Road", "Park Street",
    "Lake View", "Shivaji Road", "Ring Road", "Ashram Road", "CG Road",
    "University Road", "Airport Road", "Satellite Road", "Prahlad Nagar",
    "Bopal Road", "Vastrapur Lake Road", "Navrangpura Road", "Maninagar Road",
    "Chandkheda Road", "Gota Road",

    "Law Garden Road", "Ellis Bridge Road", "Paldi Road", "Naroda Road",
    "Nikol Road", "Odhav Road", "Isanpur Road", "Vatva Road", "Sarkhej Road",
    "Memnagar Road", "Bodakdev Road", "Thaltej Road", "Science City Road",
    "Sola Road", "Ranip Road", "Sabarmati Road", "Motera Road", "Shahibaug Road",
    "Kankaria Road", "Jamalpur Road",

    "Kalupur Road", "Relief Road", "Dariyapur Road", "Khadia Road", "Sarangpur Road",
    "Raipur Road", "Behrampura Road", "Danilimda Road", "Asarwa Road", "Meghaninagar Road",
    "Rakhial Road", "Bapunagar Road", "Amraiwadi Road", "Khokhra Road", "Hatkeshwar Road",
    "CTM Road", "Vejalpur Road", "Jivraj Park Road", "Makarba Road", "Prahladnagar Road",

    "Ghatlodia Road", "Chandlodia Road", "New Ranip Road", "Nirnaynagar Road", "Naranpura Road",
    "Usmanpura Road", "Wadaj Road", "Subhash Bridge Road", "Adalaj Road", "Koba Road",
    "Kudasan Road", "Raysan Road", "Sector 21 Road", "Sector 11 Road", "Sector 7 Road",
    "Sector 3 Road", "Sector 16 Road", "Sector 24 Road", "Sector 30 Road", "Sector 28 Road",

    "Ambawadi Road", "Gulbai Tekra Road", "Vastral Road", "Ramol Road", "Ghodasar Road",
    "Lambha Road", "Narol Road", "Sarkhej Gandhinagar Road", "SG Highway", "Sindhu Bhavan Road",
    "Judges Bungalow Road", "Drive In Road", "Gurukul Road", "Hebatpur Road", "Shela Road"
];

console.log(addresses.length);

function generateAddress() {
    const house = Math.floor(Math.random() * 200) + 1;
    const street = addresses[Math.floor(Math.random() * 100)];
    return house + " " + street;
}

function generateCity() {
    const city = cities[Math.floor(Math.random() * 5)];
    return city;
}

function generategender() {
    const gender = genders[Math.floor(Math.random() * 2)];
    return gender;
}

let csv = "id,name,city,contact,dob,gender,address\n";

for (let i = 0; i < 10000; i++) {

    const first = firstNames[Math.floor(i / lastNames.length)];
    const last = lastNames[i % lastNames.length];

    const name = first + " " + last;

    const user = [
        i + 1,
        name,
        generateCity(),
        generatePhone(),
        generateDOB(),
        generategender(),
        generateAddress()
    ];

    csv += user.join(",") + "\n";
}

fs.writeFileSync("users.csv", csv);

console.log("CSV file generated: users.csv");