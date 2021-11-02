function Schedule({location, note, belongings, method}){



    return(
        <div>
            <h1>
       
            We are going {location}.
            Please do not forget {belongings}
            {note}
            We are traveling with {method}
         
            </h1>
        </div>

    )
}

export default Schedule