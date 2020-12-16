const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name.toLowerCase()
    }

    save(objects) {
        return new Promise((resolve,reject)=>{
            fs.writeFile(`${__dirname}/${this.filename}.json`,flatted.stringify(objects,null,2),(err)=>{
                if(err) return reject(err)
                resolve()
            })
        })
      }

      load() {
        return new Promise((resolve, reject) => {
          fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
            if (err) return reject(err)
    
            const objects = flatted.parse(file)
    
            resolve(objects.map(this.model.create))
          })
        })
      }

    async insert(object){
        const objects = await this.load()
        if(!(object instanceof this.model)){
            object = this.model.create(object)
        }
        await this.save(objects.concat(object))
        return object 
    }

    async remove(index){
        const objects = await this.load()
        objects.splice(index,1)
        await this.save(objects)
    }

    async removeBy(property,value){
        const objects = await this.load()
        const index = objects.findIndex(o=>o[property] == value)
        if(index == -1) throw new Error(`Cannor find ${this.model.name} instance with id ${property} ${value}`)
        objects.splice(index,1)
        await this.save(objects)
    }

    async update(object){
        const objects = await this.load()

        const index = objects.findIndex(o=>o.id == object.id)

        if(index == -1) throw new Error(`Cannor find ${this.model.name} instance with id ${object.id}`)

        objects.splice(index,1,object)
        await this.save(objects)
    }

    async find(id){
        return (await this.load()).find(o=>o.id == id)
    }

    async findBy(property,value){
        return (await this.load()).find(o=>o[property]==value)
    }

    async findByProperty(property){
        return (await this.load()).find(o=>o[property])
    }

    findByName(name){
        return this.findBy('name',name)
    }
}

module.exports = BaseDatabase