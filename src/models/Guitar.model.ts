import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
    tableName: 'Guitar'
})

class Guitar extends Model {

    @Column({
        type: DataType.STRING(160)
    })
    name: string


    @Column({
        type: DataType.DECIMAL(10, 2)
    })
    price: number

    @Column({
        type: DataType.STRING(160)
    })
    description: string

    @Column({
        type: DataType.STRING(160)
    })
    image: string

  

}

export default Guitar;