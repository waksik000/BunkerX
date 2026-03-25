import bunkersData from '../data/bunker/bunkersData.json'

export default function generateBunker() {
  const bunkerSize = bunkersData.size[Math.floor(Math.random() * bunkersData.size.length)]
  const bunkerLivingConditions = bunkersData.livingConditions[Math.floor(Math.random() * bunkersData.livingConditions.length)]
  const bunkerMainRoom = bunkersData.mainRoom[Math.floor(Math.random() * bunkersData.mainRoom.length)]
  const bunkerAdditionalRooms = []
  const bunkerThirdRoom = bunkersData.thirdRoom[Math.floor(Math.random() * bunkersData.thirdRoom.length)]
  const bunkerInventory = bunkersData.inventory[Math.floor(Math.random() * bunkersData.inventory.length)]
  const bunkerStoryInfo = bunkersData.storyInfo[Math.floor(Math.random() * bunkersData.storyInfo.length)]

  const additionalRoomsCount = Math.floor(Math.random() * 4) // от 0 до 3 дополнительных комнат
  for (let i = 0; i < additionalRoomsCount; i++){
    bunkerAdditionalRooms.push(bunkersData.additionalRooms[Math.floor(Math.random() * bunkersData.additionalRooms.length)])
  }
  return {
    bunkerSize,
    bunkerLivingConditions,
    bunkerMainRoom,
    bunkerAdditionalRooms,
    bunkerThirdRoom,
    bunkerInventory,
    bunkerStoryInfo,
  }
}

console.log(generateBunker())