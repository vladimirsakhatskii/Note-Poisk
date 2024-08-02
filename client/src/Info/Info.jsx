import News from '../News/News'
import {news} from '../data.js'
// import './Info.css'

export default function Info(){
    return(
        <main>
            <h1>Последнии новости</h1>
            <News date={news[0].date} info={news[0].info}></News>
            <News date={news[1].date} info={news[1].info}></News>
        </main>
    )
}