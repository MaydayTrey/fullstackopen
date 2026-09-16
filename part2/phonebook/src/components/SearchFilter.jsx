const SearchFilter = ({ filterData, handleFilterData}) => {
    return(
      <div>
        filter shown with<input 
        value={filterData} 
        onChange={handleFilterData}/>
      </div>
    )
}

export default SearchFilter
/*
Data which is not defined within and thus must be props:
filterData and handleFilterData 

So how does this work when I'm passing handleFilterData, and then a state. This is a function so a callback, and then a state reference. Totally fine?


*/