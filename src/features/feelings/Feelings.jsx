import feelingsData from "../../data/feelings.json"

const Feelings = () => {
  const feelings = Object.entries(feelingsData.Feelings)

  const test = feelings.map((feel,i) => {

    const feelDesciptions = feel[1].map((feel, i) => {

      return (
      
        <button className="feelDesciption" key={i}>
          {feel}
        </button>
      
    )

    })

    return(

      <div className={`feelingsCard${feel[0]}`} key={i}> 
        <h2>
          {feel[0]}
        </h2>
        <p>
          {feelDesciptions}
        </p>
      </div>

    )

  })

  return (
    <div className="feelings">
      {test}
    </div>
    
  )
}

export default Feelings