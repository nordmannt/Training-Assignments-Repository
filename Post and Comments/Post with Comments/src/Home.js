import {useState} from 'react'
import BlogList from './BlogList'
const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'My Christmas List',
            body: `        
        "Good Omens" by Neil Gaiman and Terry Pratchett,
        "American Gods" by Neil Gaiman,
        "The Road" by Cormac McCarthy,
        Bluetooth headphones,
        A Kindle e-reader,
        Candy cane-scented candles, 
        DIY gingerbread house kit`,
            author: 'Suzy',
            id: 1,
          },
          {
            title: 'Christmas List',
            body: `        
        iMac 24-inch (Apple Silicon M1),
        Apple iPhone 16 Pro,
        Apple AirPods,
        PlayStation,
        Garmin Forerunner`,


            author: 'Billy',
            id: 2,
          },
          {
            title: 'My Christmas Stuff for me',
            body: `  
            "Where the Crawdads Sing" by Delia Owens,
            "Mistborn: The Final Empire" by Brandon Sanderson,
            "Atomic Habits" by James Clear,
            "Born a Crime" by Trevor Noah,
            "Game of Thrones" by George R.R. Martin,
            Bugatti Chiron Super Sport 300,`,





        
            author: 'Rob',
            id: 3,
          },
          {
            title: 'Christmas wish list for this year',
            body: `        
            Coal and sticks!!` ,
            author: 'Travis',
            id: 4,
          },
          {
            title: 'Merry Christmas ',
            body: `  
            I just want to see everyone's smilling faces!`,





        
            author: 'Grandma',
            id: 5,
          },    ])

    return (
        <div className='Home'>
            <BlogList blogs={blogs} title="Replies"/>

        </div>

    
    )
}

export default Home;