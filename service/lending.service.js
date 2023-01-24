const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class LendingService{

  // metodo para crear Lending
  async create(data){
    const newLending = await models.Lending.create(data);
    return newLending;
  }

  // metodo para ver todos los Lending
  async findAll(){
    const rta = await models.Lending.findAll({
      include: ['student','book']
    });
    return rta;
  }

  // metodo para consultar un Lending por su id
  async findOne(id){
    const lending = await models.Lending.findByPk(id);
    if(!lending){
      throw boom.notFound('lending not found');
    }
    return lending;
  }

  // metodo para actualizar Lending
  async update(id, change){
    const lending = await this.findOne(id);
    const rta = await lending.update(change);
    return rta;
  }

  // metodo para eliminar
  async delete(id){
    const lending = await this.findOne(id);
    await lending.destroy();
    return { id };
  }

}

module.exports = LendingService;
