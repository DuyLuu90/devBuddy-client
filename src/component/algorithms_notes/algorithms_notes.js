import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
//import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './notes_style.css'
import {RecursionNotes,ArrayNotes,LinkedListNotes,HashNotes,BSTNotes,SearchNotes,SortNotes, Algorithm} from '../../algorithms/algorithms'

export default class AlgorithmNotes extends Component{
   
    topics=[
        {path:'/algorithm/recursion',title:'Recursion',component: <RecursionNotes/>},
        {path:'/algorithm/array',title:'Array',component: <ArrayNotes/>},
        {path:'/algorithm/linkedlist',title:'Linked List',component: <LinkedListNotes/>},
        {path:'/algorithm/hash',title:'Hashed Maps',component: <HashNotes/>},
        {path:'/algorithm/bst',title:'BST',component: <BSTNotes/>},
        {path:'/algorithm/search',title:'Search',component: <SearchNotes/>},
        {path:'/algorithm/sort',title:'Sort',component: <SortNotes/>},
    ]

    
    render(){
        const links= this.topics.map((obj,i)=><Link to={obj.path} key={i} aria-label='tutorial-page'>{obj.title}</Link>)
        const routes= this.topics.map((obj,i)=><Route key={i} path={obj.path} component={()=>obj.component}/>)
        
        return (
            <div className='algorithm_notes'>
                <nav>
                    {links}
                </nav>
                <div className='algorithm_content'>
                    <Switch>
                        <Route exact path={'/algorithm'} component={Algorithm}/>
                        {routes}
                    </Switch>
                </div>
            </div>
        )
        /*
        return (
            <div>
                <nav>
                    
                </nav>
                <div>
                    <Switch>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                        <Route path={} component={}/>
                    </Switch>
                </div>
                <RecursionNotes/>
                <ArrayNotes />
                <LinkedListNotes />
                <HashNotes />
                <BSTNotes />
                <SearchNotes />
                <SortNotes />
            </div>
        )
        */
    }
}