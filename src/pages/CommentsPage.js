import CommentsComponent from "../components/CommentsComponent"

import {Outlet} from "react-router-dom"

export default function TodosPage(){
    return (
        <div>
            <CommentsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
}