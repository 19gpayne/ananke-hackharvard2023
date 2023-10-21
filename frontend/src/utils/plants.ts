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
    stock: string;
    dead: string;
    decaying: string;
    growing: string;
    mature: string;
    bloomed: string;
}

export const Ivy: Plant = {
    stock: IconIvy,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: BabyIvy,
    mature: MatureIvy,
    bloomed: BloomingIvy,
}

export const StringOfPearls: Plant = {
    stock: IconStringofPearls,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: BabyStringofPearls,
    mature: MatureStringofPearls,
    bloomed: BloomingStringofPearls,
}

export const hangingPlant3: Plant = {
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const Snake: Plant = {
    stock: IconSnake,
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: BloomingSnake,
}

export const pottedPlant2: Plant = {
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const pottedPlant3: Plant = {
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
}

export const pottedPlant4: Plant = {
    stock: 'https://i.imgur.com/8j6Q0Jg.jpg',
    decaying: 'https://i.imgur.com/8j6Q0Jg.jpg',
    dead: 'https://i.imgur.com/8j6Q0Jg.jpg',
    growing: 'https://i.imgur.com/8j6Q0Jg.jpg',
    mature: 'https://i.imgur.com/8j6Q0Jg.jpg',
    bloomed: 'https://i.imgur.com/8j6Q0Jg.jpg',
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
            return getPlantState(strengthToPlantStage(strength), hangingPlant3)
        case 3:
            return getPlantState(strengthToPlantStage(strength), Snake)
        case 4:
            return getPlantState(strengthToPlantStage(strength), pottedPlant2)
        case 5:
            return getPlantState(strengthToPlantStage(strength), pottedPlant3)
        case 6:
            return getPlantState(strengthToPlantStage(strength), pottedPlant4)
        default:
            return getPlantState(strengthToPlantStage(strength), Ivy)
    }
}