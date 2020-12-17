const {studentDatabase,teacherDatabase} = require('./database')

async function main(){

    try{
        const mehmet = await studentDatabase.findByName('Mehmet Ali')
        const serap = await teacherDatabase.findByName('Serap')

        // const questionsType = await teacherDatabase.getRandomQuestionsByType('cinayet')
        // const x = mehmet.saveFetchedQuestions(questionsType)
        
        
        // const getByQuestion = await studentDatabase.getByQuestions('1dae298c-8b7a-44cc-b000-39c9fba98aa8','f2105938-52f6-473d-9a29-c1d2df8ca290')
        // const createNews = mehmet.createNews(getByQuestion,'asdasd')

        // console.log(mehmet)
        //  await studentDatabase.update(mehmet)

        const news = await studentDatabase.getByNews('894e8bfa-3e1c-4437-ab3a-a47dc4d4737c','04a67e78-4e62-446e-9f87-d0eb8d33d17e')

        const viewNewsSerap = serap.viewNews(news,'10','Very good news')

        console.log(viewNewsSerap)

        await teacherDatabase.update(serap)
    }catch(e){
        console.log(e)
    }


}

main()

// mehmet id = 894e8bfa-3e1c-4437-ab3a-a47dc4d4737c
// questions id = 04a67e78-4e62-446e-9f87-d0eb8d33d17e