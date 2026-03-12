const fs = require("fs");



const maleFirstNames = [
    "Kunal", "Rajesh", "Hardik", "Dhruv", "Rohit", "Nikhil", "Aarav", "Tanmay", "Vedant",
    "Kabir", "Yash", "Deepak", "Ramesh", "Aryan", "Jay", "Aditya", "Vikas", "Om", "Sachin",
    "Ravindra", "Amit", "Atharva", "Sagar", "Arjun", "Harsh", "Siddharth", "Tejas", "Gaurav",
    "Pranav", "Sunil", "Reyansh", "Ishaan", "Manish", "Rajat", "Mihir", "Karan", "Kishan",
    "Varun", "Chirag", "Umesh", "Shaurya", "Dev", "Ashwin", "Dhaval", "Parth", "Tarun",
    "Dinesh", "Anil", "Vijay", "Nitin", "Bhavesh", "Krishna", "Arnav", "Jignesh", "Hitesh",
    "Tanish", "Suresh", "Alok", "Mukesh", "Rakesh", "Mahesh", "Yogesh", "Nirav", "Ajay",
    "Rohan", "Vivaan", "Pankaj", "Malav", "Kris", "Khush", "Danish"
];

const femaleFirstNames = [
    "Myra", "Ira", "Shruti", "Ananya", "Pallavi", "Sejal", "Priya", "Krupa", "Minal",
    "Heena", "Bhavna", "Ritu", "Falguni", "Anika", "Payal", "Komal", "Sneha", "Aadhya",
    "Preeti", "Nisha", "Neha", "Riya", "Pooja", "Meera", "Rupal", "Trupti", "Saanvi",
    "Aditi", "Diya", "Avani"
];

const lastNames = [
    "Kapoor", "Pandya", "Murthy", "Roy", "Goyal", "Tripathi", "Kulkarni", "Solanki", "Suri", "Bhattacharya",
    "Gill", "Mehta", "Jindal", "Dubey", "Pandey", "Shetty", "Ahuja", "Nair", "Joshi", "Pathak",
    "Patel", "Trivedi", "Khanna", "More", "Desai", "Rathore", "Agnihotri", "Pillai", "Saxena", "Banerjee",
    "Rajput", "Patil", "Ghosh", "Sidhu", "Chaturvedi", "Bansal", "Vyas", "Batra", "Chopra", "Mahajan",
    "Das", "Kamble", "Kadam", "Iyengar", "Chaudhary", "Reddy", "Tanwar", "Sharma", "Malhotra", "Chatterjee",
    "Singh", "Dwivedi", "Shinde", "Upadhyay", "Parikh", "Yadav", "Sandhu", "Deshpande", "Mittal", "Brar",
    "Kumar", "Dave", "Shah", "Mathur", "Mishra", "Sawant", "Dutta", "Sethi", "Naidu", "Gaikwad",
    "Verma", "Nigam", "Modi", "Sen", "Arora", "Chavan", "Prajapati", "Bose", "Sisodia", "Shekhawat",
    "Tiwari", "Gawande", "Srivastava", "Menon", "Salunkhe", "Lal", "Shukla", "Agarwal", "Iyer", "Dhillon",
    "Chauhan", "Kohli", "Gupta", "Sood", "Mukherjee", "Pawar", "Dhoni", "Bumrah", "Gill", "Tendulkar"
];
// console.log(firstNames[99])

const cities = [
    "Ahmedabad",
    "Surat",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur"
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
    "Judges Bungalow Road", "Drive In Road", "Gurukul Road", "Hebatpur Road", "Shela Road", "Silver Radiance Road", "Maudi-kankot Road", "Dharmendra Road", "Airport Road", "Kasturba Road"
];



function generateAddress() {
    const house = Math.floor(Math.random() * 200) + 1;
    const street = addresses[Math.floor(Math.random() * addresses.length)];
    return house + " " + street;
}

function generateCity() {
    const city = cities[Math.floor(Math.random() * cities.length)];
    return city;
}

function generategender() {
    const gender = genders[Math.floor(Math.random() * 2)];
    return gender;
}



// combine male + female
const firstNames = [
    ...maleFirstNames.map(n => ({ name: n, gender: "Male" })),
    ...femaleFirstNames.map(n => ({ name: n, gender: "Female" }))
];

// generate all combinations
let combinations = [];

for (let f of firstNames) {
    for (let l of lastNames) {
        combinations.push({
            name: f.name + " " + l,
            gender: f.gender
        });
    }
}

// shuffle (Fisher-Yates)
for (let i = combinations.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinations[i], combinations[j]] = [combinations[j], combinations[i]];
}

// take first 10000
const users = combinations.slice(0, 10000);

// CSV header
let csv = "id,name,city,contact,dob,gender,address\n";

users.forEach((u, i) => {
    const row = [
        i + 1,
        u.name,
        generateCity(),
        generatePhone(),
        generateDOB(),
        u.gender,
        generateAddress()
    ];

    csv += row.join(",") + "\n";
});

fs.writeFileSync("users.csv", csv);

console.log("CSV file generated: users.csv");