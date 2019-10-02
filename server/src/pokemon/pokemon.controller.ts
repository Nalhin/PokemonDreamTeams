import {Request, Response} from "express";
import PokemonModel from "./pokemon.model";

export const getAllPokemon = async (req: Request, res: Response) => {
    try {
        const allPokemon = await PokemonModel.find({});
        res.send(allPokemon)
    } catch (e) {
        res.status(500).send(e)
    }
};