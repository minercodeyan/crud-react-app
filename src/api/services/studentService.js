// eslint-disable-next-line import/no-anonymous-default-export
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
        },
        updateStudent(id,student){
            return instance.put('/students/'+id,student)
        }
    }
}