import './index.css'

const Leaderboard = () => {
  const renderLeaderboardHeader = () => (
    <li className="leaderboard-header">
      <p className="table-heading rank">Rank</p>
      <p className="table-heading name">Name</p>
      <p className="table-heading score">Score</p>
      <p className="table-heading language">Language</p>
      <p className="table-heading time-spent">Time Spent</p>
    </li>
  )

  const renderLeaderboard = () => (
    <ul className="leaderboard-table-container">{renderLeaderboardHeader()}</ul>
  )

  return (
    <div className="leaderboard-container">{renderLeaderboardHeader()}</div>
  )
}

export default Leaderboard
// import {useState, useEffect} from 'react'
// import LeaderboardRow from '../LeaderboardRow/index.jsx'
// import BeatLoader from 'react-spinners/BeatLoader'
/*
      {leaderboardData.map(eachUser => (
        <LeaderboardRow userDetails={eachUser} key={eachUser.id} />
     ))}
     */
// {isLoading ? renderLoader() : renderLeaderboard()}

// const [leaderboardData, setLeaderboardData] = useState([])
// const [isLoading, setIsLoading] = useState(true)
// useEffect(() => {
//   const getLeaderBoardData = async () => {
//     const url = 'https://apis2.ccbp.in/leaderboard-v2'
//     const response = await fetch(url)
//     const responseData = await response.json()
//     // console.log(responseData)
//     const formattedData = responseData.leaderboard_data.map(eachUser => ({
//       id: eachUser.id,
//       rank: eachUser.rank,
//       name: eachUser.name,
//       profileImgUrl: eachUser.profile_image_url,
//       score: eachUser.score,
//       language: eachUser.language,
//       timeSpent: eachUser.time_spent,
//     }))
//     setLeaderboardData(formattedData)
//     setIsLoading(false)
//   }
//   getLeaderBoardData()
// }, [])
// const renderLoader = () => (
//   <div className="loading-view-container">
//     <BeatLoader color="#ffffff" />
//   </div>
// )
