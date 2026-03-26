import disastersData from '../data/disasters/disasters.json'

export default function generateDisaster() {
  return disastersData[Math.floor(Math.random() * disastersData.length)]
}
