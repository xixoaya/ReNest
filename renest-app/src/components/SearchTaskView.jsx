import './SearchTaskView.css';
import Block from './Block';

const SearchTaskView = ({ onGoBack }) => {

    return <> 
        <div className="search-view-header">
            <form className="search-search-view">
                    <input type="text" id='query' className="search-view-input" name="query" placeholder="B|" />
            </form>
            <div className="search-view-cancel" onClick={onGoBack} >
                Cancel
            </div>
        </div>
        <div className="search-view-body">
            <div className={`priority-container priority-container--normal`}>
                <h2 className={`priority-title priority-title--normal`}>NORMAL PRIORITY</h2>
                <div className="priority--tasks">
                    <div className="task-container">
                        <div className="task-cercle" ></div>
                        <div className="task-name">Book professional movers</div>
                    </div>
                    <div className="task-container">
                        <div className="task-cercle" ></div>
                        <div className="task-name">Begin packing</div>
                    </div> 
                </div>
            </div>
            <h2 className='todo-search-view'>TODO SEARCH VIEW</h2>
        </div>

    </>
}

export default SearchTaskView