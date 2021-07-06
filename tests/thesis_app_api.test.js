const mongoose = require("mongoose")
const supertest = require("supertest")
const session = require("supertest-session")
const app = require("../app")
const helper = require("./test_helper")
const User = require("../models/user")


const api = supertest(app)
var testSession = null


describe("when there is one user in the db", ()=>{
    beforeEach(async () =>{
        await User.deleteMany({})
        let userObject = new User(helper.initialUsers[0])
        await userObject.save()
        testSession = session(app)
    })
    test("users can login ", async () =>{
        const credentials = {username: "testuser", password:"test90"}
        await api.post("/api/login").send(credentials).expect(200).expect(res => {res.username === "testuser"}) 
    })
    test("and can access accounts if they gave consent", async()=>{
        const credentials = {username: "testuser", password:"test90"}
        await testSession.post("/api/login").send(credentials)
        await testSession.get("/api/obpApi/getMyAccounts").expect(200).expect("Content-Type", /application\/json/)
        await testSession.get("/api/login/logout")
    }) 
    test("users can sign up", async () =>{
        const usersAtStart = await helper.usersInDb()
        const newUser ={username: "testuser2", password:"test90"}
        await api.post("/api/users").send(newUser).expect(200).expect("Content-Type", /application\/json/)
        const usersAtEnd = await helper.usersInDb()

        expect(expect(usersAtEnd).toHaveLength(usersAtStart.length + 1))

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)

    })
    test("sign up fails and message if username already taken", async () =>{
        const usersAtStart = await helper.usersInDb()
        const newUser ={
            username: "testuser",
            name:"test user",
            password:"test90"
        }

        const result = await api.post("/api/users").send(newUser).expect(400).expect("Content-Type", /application\/json/)

        expect(result.body.error).toContain("`username` to be unique")

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
    test("users can log out", async ()=>{
        await api.get("/api/login/logout").expect(200)
    })
})


afterAll(() => {
    mongoose.connection.close()
})