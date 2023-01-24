const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class StudentService{

  // metodo para crear Students
  async create(data){
    const newStudent = await models.Student.create(data);
    return newStudent;
  }

  // metodo para ver todos los Students
  async findAll(){
    const rta = await models.Student.findAll({
      include: ['lending']
    });
    return rta;
  }

  // metodo para consultar un Students por su id
  async findOne(id){
    const student = await models.Student.findByPk(id);
    if(!student){
      throw boom.notFound('student not found');
    }
    return student;
  }

  // metodo para actualizar Students
  async update(id, change){
    const student = await this.findOne(id);
    const rta = await student.update(change);
    return rta;
  }

  // metodo para eliminar
  async delete(id){
    const student = await this.findOne(id);
    await student.destroy();
    return { id };
  }

}

module.exports = StudentService;
