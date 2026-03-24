import traits from '../data/cards/traits.json'
import { nanoid } from 'nanoid';
function generateCard() {
    const profession = traits.professions[Math.floor(Math.random() * traits.professions.length)];
    const health = traits.health[Math.floor(Math.random() * traits.health.length)];
    const hobby = traits.hobbies[Math.floor(Math.random() * traits.hobbies.length)];
    const baggage = traits.baggage[Math.floor(Math.random() * traits.baggage.length)];
    const biology = traits.biology[Math.floor(Math.random() * traits.biology.length)];
    const trait = traits.traits[Math.floor(Math.random() * traits.traits.length)];
    const phobia = traits.phobias[Math.floor(Math.random() * traits.phobias.length)];
    const fact = traits.facts[Math.floor(Math.random() * traits.facts.length)];
    const playerId = nanoid()
        return {
            playerId,
            profession,
            health,
            hobby,
            baggage,
            biology,
            trait,
            phobia,
            fact,
        }
}


export default function generateCards(playersCount) {
    const cards = []

    for (let i = 0; i< playersCount; i++) {
        cards.push(generateCard())
    }

    return cards
}