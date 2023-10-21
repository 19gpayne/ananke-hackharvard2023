import IconIvy from '../assets/plants/Ivy/IconIvy.svg'
import BabyIvy from '../assets/plants/Ivy/BabyIvy.svg'
import BloomingIvy from '../assets/plants/Ivy/BloomingIvy.svg'
import MatureIvy from '../assets/plants/Ivy/MatureIvy.svg'

import IconStringofPearls from '../assets/plants/StringOfPearls/IconStringofPearls.svg'
import BabyStringofPearls from '../assets/plants/StringOfPearls/BabyStringofPearls.svg'
import BloomingStringofPearls from '../assets/plants/StringOfPearls/BloomingStringofPearls.svg'
import MatureStringofPearls from '../assets/plants/StringOfPearls/MatureStringofPearls.svg'

import IconSnake from '../assets/plants/Snake/IconSnake.svg'
import BloomingSnake from '../assets/plants/Snake/BloomingSnake.svg'
import MatureSnake from '../assets/plants/Snake/MatureSnake.svg'

type Plant = {
    name: string;
    stock: string;
    dead: string;
    decaying: string;
    growing: string;
    mature: string;
    bloomed: string;
}

export const Ivy: Plant = {
    name: "ivy",
    stock: IconIvy,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: BabyIvy,
    mature: MatureIvy,
    bloomed: BloomingIvy,
}

export const StringOfPearls: Plant = {
    name: "string of pearls",
    stock: IconStringofPearls,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: BabyStringofPearls,
    mature: MatureStringofPearls,
    bloomed: BloomingStringofPearls,
}

export const Fern: Plant = {
    name: "fern",
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const Snake: Plant = {
    name: "snake",
    stock: IconSnake,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: BloomingSnake,
}

export const Swirl: Plant = {
    name: 'swirl',
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const Flower: Plant = {
    name: 'flower',
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const Rose: Plant = {
    name: 'rose',
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const dayToPlant = (day: number) => {
    switch (day) {
        case 0:
            return Snake.name;
        case 1:
            return Ivy.name;
        case 2:
            return Swirl.name;
        case 3:
            return StringOfPearls.name;
        case 4:
            return Flower.name;
        case 5:
            return Fern.name;
        case 6:
            return Rose.name;
        default:
            return Snake.name;
    }
}

export const strengthToColor = (strength: number) => {
    if (strength < 0.25) {
        return 'darkred'
    } else if (strength < 0.5) {
        return '#8b4513ba'
    } else if (strength < 0.75) {
        return '#6B8E23'
    } else {
        return 'green'
    }
}

const strengthToPlantStage = (strength: number) => {
    if (strength < 0) {
        return 'stock'
    } else if (strength < 0.2) {
        return 'decaying'
    } else if (strength < 0.4) {
        return 'dead'
    } else if (strength < 0.6) {
        return 'growing'
    } else if (strength < 0.8) {
        return 'mature'
    } else {
        return 'bloomed'
    }
}

const getPlantState = (state: string, plant: Plant) => {
    switch (state) {
        case 'stock':
            return plant.stock;
        case 'decaying':
            return plant.decaying;
        case 'dead':
            return plant.dead;
        case 'growing':
            return plant.growing;
        case 'mature':
            return plant.mature;
        case 'bloomed':
            return plant.bloomed;
        default:
            return plant.decaying;
    }
}

export const idToPlants = (id: number, strength: number) => {
    switch (id) {
        case 0:
            return getPlantState(strengthToPlantStage(strength), Ivy)
        case 1:
            return getPlantState(strengthToPlantStage(strength), StringOfPearls)
        case 2:
            return getPlantState(strengthToPlantStage(strength), Fern)
        case 3:
            return getPlantState(strengthToPlantStage(strength), Snake)
        case 4:
            return getPlantState(strengthToPlantStage(strength), Swirl)
        case 5:
            return getPlantState(strengthToPlantStage(strength), Flower)
        case 6:
            return getPlantState(strengthToPlantStage(strength), Rose)
        default:
            return getPlantState(strengthToPlantStage(strength), Ivy)
    }
}