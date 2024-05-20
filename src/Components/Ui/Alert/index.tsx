import { FC, ReactNode } from "react"
import { X} from 'lucide-react';
import './index.scss'
import { AlertList } from "../../types";

interface IProps{
  type: AlertList
  icon:ReactNode
  title:string
  description?:string
  children?:ReactNode
}
const index:FC<IProps>= ({type,icon,title,description ,children}) => {
  return (
    <div className={type}>
     <div className="alert-header">
      <div className="alert-title">
      <span> 
        {icon}
      </span>
      <h4>{title}</h4>
      </div>
    
        <X  className="close" size={30}/>
     </div>
      
         <p>{children? children: <p>{description}</p>}</p>
    </div>
  )
}

export default index