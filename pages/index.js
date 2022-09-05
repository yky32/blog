import Format from '../layout/format'

//components
import Banner from '../components/banner'
import LatestPosts from '../components/latestPosts'
import PopularPosts from '../components/popularPosts'
import TwoColumns from '../components/twoColumns'

export default function Home() {
    return (
        <Format>
            <Banner></Banner>
            <LatestPosts></LatestPosts>
            <PopularPosts></PopularPosts>
            <TwoColumns></TwoColumns>
        </Format>
    )
}

