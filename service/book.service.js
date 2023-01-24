const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class BookService{

  // metodo para crear Books
  async create(data){
    const newBook = await models.Book.create(data);
    return newBook;
  }

  // metodo para ver todos los Books
  async findAll(){
    const rta = await models.Book.findAll({
      include: ['lending']
    });
    return rta;
  }

  // metodo para consultar un book por su id
  async findOne(id){
    const book = await models.Book.findByPk(id);
    if(!book){
      throw boom.notFound('book not found');
    }
    return book;
  }

  // metodo para actualizar books
  async update(id, change){
    const book = await this.findOne(id);
    const rta = await book.update(change);
    return rta;
  }

  // metodo para eliminar
  async delete(id){
    const book = await this.findOne(id);
    await book.destroy();
    return { id };
  }

}

module.exports = BookService;
