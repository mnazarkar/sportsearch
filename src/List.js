
import './App.css';

function List({ searchedList, searchText }) {
    // console.log(searchedList);
    console.log(searchText);
    if (searchedList.length === 0) return <h3 style={{color:'red'}}>No Matching Record Found!</h3>;
    return (
        <div>
            <div className='div2'>
                <div className="searchresult">Search Results for : {searchText}</div>
                <div className="count">Count : {searchedList.length} </div>
            </div>
            {
                searchedList.map((e)=>{
                    return(
                        <div key={e.id} className='listFormat'>
                            <div><img src={e.image} alt="not found" style={{width:'60%', marginLeft:'30%'}}/></div>
                            <div className='setAtcenter'>{e.description}</div>
                            <div className='setAtcenter' onClick={window.print}><button className='printButton'>Print</button></div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;