const {studentDatabase,teacherDatabase} = require('./database')
const Teacher = require('./models/teacher')
const Student = require('./models/student')

const serap = Teacher.create({name:"Serap",email:"serap@gmail.com",password:"123456"})
const mehmet = Student.create({name:"Mehmet Ali",email:"mehmet@gmail.com",password:"123456"})

serap.createQuestions({why:"siyasi anlaşmazlık",when:"10.12.2020",what:"cinayet",where:"Adana",who:"Cuma I.",how:"12 yerinden bıçaklama"})




async function main(){

    try{
        await studentDatabase.save([mehmet])
        await teacherDatabase.save([serap])

    }catch(e){
        console.log(e)
    }


}

main()