import Format from '../layout/format'
import fs from "fs";

//components
import Banner from '../components/banner'
import LatestPosts from '../components/latestPosts'
import PopularPosts from '../components/popularPosts'
import TwoColumns from '../components/twoColumns'
import Mds from '../components/mds'

export async function getStaticProps() {
    const files = fs.readdirSync('mds/posts');
    const mds = files.map((fileName) => {
        return fileName.replace('.md', '')
    })
    return {
        props:{
            mds
        }
    }
}


export default function Home({mds}) {
    return (
        <Format>
            <div>
            </div>
            <Banner></Banner>
            <LatestPosts></LatestPosts>
            <PopularPosts></PopularPosts>
            <TwoColumns></TwoColumns>
        </Format>
    )
}

