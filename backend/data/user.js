import bcrypt from "bcryptjs";


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        contact: 8452088328, 
        password: bcrypt.hashSync('123456', 10),
        dob: new Date(2019, 3, 29, 13, 12),
        address: "206 chunahatti",
        isAdmin: true,
        isEmployee: false
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@example.com',
        contact: 8452088328,
        password: bcrypt.hashSync('123456', 10),
        dob: new Date(2019, 3, 29, 13, 12),
        address: "206 chunahatti",
        isAdmin: false,
        isEmployee: false
        
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        contact: 8452088328,
        password: bcrypt.hashSync('123456', 10),
        isBlocked: true,
        dob: new Date(2019, 3, 29, 13, 12),
        address: "206 chunahatti",
        isAdmin: false,
        isEmployee: true
    },
    {
        name: 'Harry Doe',
        email: 'harry@example.com',
        contact: 8452088328,
        password: bcrypt.hashSync('123456', 10),
        dob: new Date(2019, 3, 29, 13, 12),
        address: "206 chunahatti",
        isAdmin: false,
        isEmployee: true
    },
]


export default users;