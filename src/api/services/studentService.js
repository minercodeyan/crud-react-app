export default function (instance) {
    return {
        getAll() {
            return instance.get('/students')
        },
        postStudent(student){
            return instance.post('/students',student)
        },
        deleteStudent(id){
            return instance.delete('/students/'+id)
        }
    }
}