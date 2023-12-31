import IconIvy from '../assets/plants/Ivy/IconIvy.svg'
import PotIvy from '../assets/Pots/IvyPot.svg'
import BabyIvy from '../assets/plants/Ivy/BabyIvy.svg'
import BloomingIvy from '../assets/plants/Ivy/BloomingIvy.svg'
import MatureIvy from '../assets/plants/Ivy/MatureIvy.svg'

import IconStringofPearls from '../assets/plants/StringOfPearls/IconStringofPearls.svg'
import BabyStringofPearls from '../assets/plants/StringOfPearls/BabyStringofPearls.svg'
import BloomingStringofPearls from '../assets/plants/StringOfPearls/BloomingStringofPearls.svg'
import MatureStringofPearls from '../assets/plants/StringOfPearls/MatureStringofPearls.svg'
import PotStringofPearls from '../assets/Pots/PearlPot.svg'

import IconSnake from '../assets/plants/Snake/IconSnake.svg'
import BabySnake from '../assets/plants/Snake/BabySnake.svg'
import BloomingSnake from '../assets/plants/Snake/BloomingSnake.svg'
import MatureSnake from '../assets/plants/Snake/MatureSnake.svg'
import PotSnake from '../assets/Pots/SnakePot.svg'

import IconFern from '../assets/plants/Fern/IconFern.svg';
import BabyFern from '../assets/plants/Fern/BabyFern.svg';
import MatureFern from '../assets/plants/Fern/MatureFern.svg';
import BloomingFern from '../assets/plants/Fern/BloomingFern.svg';
import PotFern from '../assets/Pots/FernPot.svg';

import IconSwirl from '../assets/plants/Swirl/IconSwirl.svg';
import BabySwirl from '../assets/plants/Swirl/BabySwirl.svg';
import MatureSwirl from '../assets/plants/Swirl/MatureSwirl.svg';
import BloomingSwirl from '../assets/plants/Swirl/BloomingSwirl.svg';
import PotSwirl from '../assets/Pots/SwirlPot.svg';

import IconFlower from '../assets/plants/Flower/IconFlower.svg';
import BabyFlower from '../assets/plants/Flower/BabyFlower.svg';
import MatureFlower from '../assets/plants/Flower/MatureFlower.svg';
import BloomingFlower from '../assets/plants/Flower/BloomingFlower.svg';
import PotFlower from '../assets/Pots/FlowerPot.svg';

import IconRose from '../assets/plants/Rose/IconRose.svg';
import BabyRose from '../assets/plants/Rose/BabyRose.svg';
import MatureRose from '../assets/plants/Rose/MatureRose.svg';
import BloomingRose from '../assets/plants/Rose/BloomingRose.svg';
import PotRose from '../assets/Pots/RosePot.svg';

import thriving from '../assets/gardenStatus/thriving.svg';
import decaying from '../assets/gardenStatus/decaying.svg';
import growing from '../assets/gardenStatus/growing.svg';
import blooming from '../assets/gardenStatus/blooming.svg';

//Type of plant, has 4 different stages of growth
type Plant = {
    name: string;
    stock: string;
    dead: string;
    growing: string;
    mature: string;
    bloomed: string;
}

export const Ivy: Plant = {
    name: "ivy",
    stock: IconIvy,
    dead: PotIvy,
    growing: BabyIvy,
    mature: MatureIvy,
    bloomed: BloomingIvy,
}

export const StringOfPearls: Plant = {
    name: "string of pearls",
    stock: IconStringofPearls,

    dead: PotStringofPearls,
    growing: BabyStringofPearls,
    mature: MatureStringofPearls,
    bloomed: BloomingStringofPearls,
}

export const Fern: Plant = {
    name: "fern",
    stock: IconFern,
    dead: PotFern,
    growing: BabyFern,
    mature: MatureFern,
    bloomed: BloomingFern,
}

export const Snake: Plant = {
    name: "snake",
    stock: IconSnake,
    dead: PotSnake,
    growing: BabySnake,
    mature: MatureSnake,
    bloomed: BloomingSnake,
}

export const Swirl: Plant = {
    name: 'swirl',
    stock: IconSwirl,
    dead: PotSwirl,
    growing: BabySwirl,
    mature: MatureSwirl,
    bloomed: BloomingSwirl,
}

export const Flower: Plant = {
    name: 'flower',
    stock: IconFlower,
    dead: PotFlower,
    growing: BabyFlower,
    mature: MatureFlower,
    bloomed: BloomingFlower,
}

export const Rose: Plant = {
    name: 'rose bush',
    stock: IconRose,
    dead: PotRose,
    growing: BabyRose,
    mature: MatureRose,
    bloomed: BloomingRose,
}

export const idToPlants = (id: number, strength: number) => {
    switch (id) {
        case 0:
            return getPlantState(strengthToPlantStage(strength), Snake)
        case 1:
            return getPlantState(strengthToPlantStage(strength), StringOfPearls)
        case 2:
            return getPlantState(strengthToPlantStage(strength), Flower)
        case 3:
            return getPlantState(strengthToPlantStage(strength), Ivy)
        case 4:
            return getPlantState(strengthToPlantStage(strength), Swirl)
        case 5:
            return getPlantState(strengthToPlantStage(strength), Fern)
        case 6:
            return getPlantState(strengthToPlantStage(strength), Rose)
        default:
            return getPlantState(strengthToPlantStage(strength), Ivy)
    }
}

export const dayToPlant = (day: number) => {
    switch (day) {
        case 0:
            return Snake.name;
        case 1:
            return StringOfPearls.name;
        case 2:
            return Flower.name;
        case 3:
            return Ivy.name;
        case 4:
            return Swirl.name;
        case 5:
            return Fern.name;
        case 6:
            return Rose.name;
        default:
            return Ivy.name;
    }
}

export const mondaySundayWeekNumberConversion = (day: number) => {
    if (day === 0) {
        return 6
    } else {
        return day - 1
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

//Returns a plant stage based on the intensity of a workout
const strengthToPlantStage = (strength: number) => {
    if (strength < 0) {
        return 'stock'
    } else if (strength < 0.25) {
        return 'dead'
    } else if (strength < 0.5) {
        return 'growing'
    } else if (strength < 0.75) {
        return 'mature'
    } else {
        return 'bloomed'
    }
}

//Returns the correct image of a plant based on the stage
const getPlantState = (state: string, plant: Plant) => {
    switch (state) {
        case 'stock':
            return plant.stock;
        case 'dead':
            return plant.dead;
        case 'growing':
            return plant.growing;
        case 'mature':
            return plant.mature;
        case 'bloomed':
            return plant.bloomed;
        default:
            return plant.dead;
    }
}

//Returns the correct icon based on the stage of growth
export const getStatusIcon = (state: string) => {
    switch (state) {
        case 'Thriving':
            return thriving;
        case 'Blooming':
            return blooming;
        case 'Growing':
            return growing;
        case 'Decaying':
            return decaying;
    }
}