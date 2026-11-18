import Guitar from '../models/Guitar.model'
import { check, validationResult } from 'express-validator';
import { Request, Response } from 'express'
export const createGuitar = async (req: Request, res: Response) => {
    try {
        await check('name')
            .notEmpty().withMessage('La guitarra debe tener un nombre').run(req);
        await check('price')
            .notEmpty().withMessage("El precio de la guitarra no puede estar vacío")
            .isFloat({ gt: 0 }).withMessage("El precio debe ser mayor a 0")
            .run(req);
        await check('description')
            .notEmpty().withMessage('La guitarra debe tener una descripción').run(req);
        await check('image')
            .notEmpty().withMessage('La guitarra debe tener una imagen').run(req);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const guitar = await Guitar.create(req.body);
        const savedGuitar = await guitar.save()
        res.json({ data: guitar })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al registrar la guitarra'
        });

    }
}

export const getGuitar = async (req: Request, res: Response) => {
    try {

        const guitars = await Guitar.findAll();

        if (!guitars) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }

        res.status(200).json({ data: guitars });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
};

export const updateGuitar = async (req: Request, res: Response) => {
    try {
        await check('name')
            .notEmpty().withMessage('La guitarra debe tener un nombre').run(req);
        await check('price')
            .notEmpty().withMessage("El precio de la guitarra no puede estar vacío")
            .isFloat({ gt: 0 }).withMessage("El precio debe ser mayor a 0")
            .run(req);
        await check('description')
            .notEmpty().withMessage('La guitarra debe tener una descripción').run(req);
        await check('image')
            .notEmpty().withMessage('La guitarra debe tener una imagen').run(req);

        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        const guitar = await Guitar.findByPk(id);

        if (!guitar) {
            return res.status(404).json({
                message: 'Guitarra no encontrado'
            });
        }

        await guitar.update(req.body);

        return res.status(200).json({
            data: guitar
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar la guitarra' });
    }
};
