import styles from './advantages.module.css'
import scenarioIcon from './icons/scenario.png'
import interfaceIcon from './icons/interface.png'
import accessibilityIcon from './icons/accessibility.png'
import strategyIcon from './icons/strategy.png'
import communityIcon from './icons/community.png'
import endlessIcon from './icons/endless.png'

const iconMap = {
  1: scenarioIcon,
  2: interfaceIcon,
  3: accessibilityIcon,
  4: strategyIcon,
  5: communityIcon,
  6: endlessIcon
}

const advantages = [
  {
    id: 1,
    title: 'Уникальные сценарии',
    description: 'Каждая партия генерирует новый сценарий с уникальной катастрофой и условиями бункера'
  },
  {
    id: 2,
    title: 'Простой интерфейс',
    description: 'Интуитивный дизайн позволяет быстро создавать игры и раздавать карточки участникам'
  },
  {
    id: 3,
    title: 'Доступность',
    description: 'Играйте где угодно: дома, в офисе или на прогулке через персональные ссылки'
  },
  {
    id: 4,
    title: 'Стратегия и переговоры',
    description: 'Глубокий геймплей, требующий логики, убеждения и умения находить компромиссы'
  },
  {
    id: 5,
    title: 'Компания и социум',
    description: 'Отличный способ провести время с друзьями и лучше узнать их точку зрения'
  },
  {
    id: 6,
    title: 'Бесконечные возможности',
    description: 'Каждая партия уникальна, никогда не скучаете благодаря разнообразным сценариям'
  }
]

export default function Advantages() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему вам понравится играть в BunkerX?</h2>
        
        <div className={styles.grid}>
          {advantages.map(item => (
            <div key={item.id} className={styles.card}>
              <img 
                src={iconMap[item.id]} 
                alt={item.title} 
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
