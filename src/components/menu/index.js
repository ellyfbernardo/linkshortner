import './menu.css'
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
           <a className='social' href="https://www.youtube.com/channel/UCP0e9FUEzZc6k9GqYng7aSA">
            <BsYoutube color='#FFF' size={24} />
           </a>
           <a className='social' href="https://www.instagram.com/ellyf.bernardo/">
            <BsInstagram color='#FFF' size={24} />
           </a>
           <Link className='menu-item' to='/links'>
                Meus links
           </Link>
        </div>
    )
}