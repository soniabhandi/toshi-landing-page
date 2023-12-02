

// const NewCard = () => {
//   const CommonDesc="Welcome to Toshi, the first suite of DeFi blockchain! We’re excited to introduce ourfirst product, a token locker that allows troduce ourfirst product, a token ."

//   const CardData = [
//     {
//       title: "TOKEN LOCKER",
//       imageUrl:lock
//     },
//     {
//       title: "TOKEN LAUNCHER",
//       imageUrl:lock
//     },
//     {
//       title: "MULTISENDER",
//       imageUrl:multisender
//     },
//     {
//       title: "SWAP",
//       imageUrl:swap
//     },
//     {
//       title: "TOKEN LAUNCHER",
//       imageUrl:token
//     },
//     {
//       title: "LAUNCHPAD",
//       imageUrl:gps
//     }
//   ];

//   return (
//     <>
//     <div>
//     </div>

//     <div>
//       <img src={Toshi}/>
//     </div>
//     <div>
//     {CardData.map((val,index) => (
//       <div key={index}>
//         <img src={val.imageUrl} alt='img' />
//         <h3>{val.title}</h3>
//         <p>{CommonDesc}</p>
//       </div>
//     ))}
//   </div>
//     </>
    
//   )
// }
import './NewCard.css'

const NewCard = () => {
  return (
    <>
    <div className="main-card"></div>
    </>
  )
}

export default NewCard